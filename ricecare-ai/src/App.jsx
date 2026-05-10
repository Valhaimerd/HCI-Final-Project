import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { mockAiResults } from "./data/mockAiResults";
import { mockHistory } from "./data/mockHistory";
import { getMockAiResult } from "./utils/mockAnalysis";
import { formatDate, formatDateTime } from "./utils/formatDate";
import { loadStorage, saveStorage } from "./utils/storage";
import Welcome from "./pages/Welcome";
import Consent from "./pages/Consent";
import PrivacyDetails from "./pages/PrivacyDetails";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import ImagePreview from "./pages/ImagePreview";
import PhotoGuide from "./pages/PhotoGuide";
import PoorImageWarning from "./pages/PoorImageWarning";
import Analyzing from "./pages/Analyzing";
import Result from "./pages/Result";
import Recommendations from "./pages/Recommendations";
import TreatmentWarning from "./pages/TreatmentWarning";
import SaveConfirmation from "./pages/SaveConfirmation";
import TechnicianSupport from "./pages/TechnicianSupport";
import ReportWrongResult from "./pages/ReportWrongResult";
import ReviewSubmitted from "./pages/ReviewSubmitted";
import ReviewStatus from "./pages/ReviewStatus";
import History from "./pages/History";
import ResultDetails from "./pages/ResultDetails";
import DeleteConfirmation from "./pages/DeleteConfirmation";
import HelpCenter from "./pages/HelpCenter";
import HelpArticle from "./pages/HelpArticle";
import CommonProblems from "./pages/CommonProblems";
import Settings from "./pages/Settings";
import ManageConsent from "./pages/ManageConsent";
import About from "./pages/About";

const AppContext = createContext(null);

export function useRiceCare() {
  return useContext(AppContext);
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function buildSavedRecord(result, status = "Saved") {
  return {
    id: `result-${Date.now()}`,
    date: formatDate(),
    possibleIssue: result.possibleIssue,
    confidence: result.confidence,
    riskLevel: result.riskLevel,
    status,
    category: result.category,
    explanation: result.explanation,
    treatmentSummary: result.treatmentSteps[0],
    preventionSummary: result.preventionTips[0],
    auditTrail: [...result.auditEvents, status === "Saved" ? "Result saved" : "Shared with technician"],
  };
}

function AppProvider({ children }) {
  const [consentAccepted, setConsentAccepted] = useState(() =>
    loadStorage("ricecare_consent", false)
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const [analysisMode, setAnalysisMode] = useState("random");
  const [currentAiResult, setCurrentAiResult] = useState(() =>
    loadStorage("ricecare_current_result", mockAiResults[0])
  );
  const [savedResults, setSavedResults] = useState(() =>
    loadStorage("ricecare_saved_results", [])
  );
  const [deletedResultIds, setDeletedResultIds] = useState(() =>
    loadStorage("ricecare_deleted_result_ids", [])
  );
  const [reviewRequests, setReviewRequests] = useState(() =>
    loadStorage("ricecare_review_requests", [])
  );
  const [lastReview, setLastReview] = useState(() =>
    loadStorage("ricecare_last_review", null)
  );
  const [settings, setSettings] = useState(() =>
    loadStorage("ricecare_accessibility_settings", {
      textSize: "normal",
      language: "English",
      voiceGuidance: false,
      highContrastMode: false,
      simpleMode: false,
    })
  );
  const [consentSettings, setConsentSettings] = useState(() =>
    loadStorage("ricecare_consent_settings", {
      imageAnalysis: true,
      saveResults: true,
      technicianSharing: false,
      anonymizedUse: false,
    })
  );

  useEffect(() => saveStorage("ricecare_consent", consentAccepted), [consentAccepted]);
  useEffect(() => saveStorage("ricecare_current_result", currentAiResult), [currentAiResult]);
  useEffect(() => saveStorage("ricecare_saved_results", savedResults), [savedResults]);
  useEffect(() => saveStorage("ricecare_deleted_result_ids", deletedResultIds), [deletedResultIds]);
  useEffect(() => saveStorage("ricecare_review_requests", reviewRequests), [reviewRequests]);
  useEffect(() => saveStorage("ricecare_last_review", lastReview), [lastReview]);
  useEffect(() => saveStorage("ricecare_accessibility_settings", settings), [settings]);
  useEffect(() => saveStorage("ricecare_consent_settings", consentSettings), [consentSettings]);

  const historyItems = (savedResults.length ? savedResults : mockHistory).filter(
    (item) => !deletedResultIds.includes(item.id)
  );

  const runMockAnalysis = () => {
    const result = getMockAiResult(analysisMode);
    setCurrentAiResult(result);
    return result;
  };

  const saveCurrentResult = () => {
    const record = buildSavedRecord(currentAiResult, "Saved");
    setSavedResults((items) => [record, ...items]);
    setDeletedResultIds((items) => items.filter((id) => id !== record.id));
    return record;
  };

  const shareCurrentResult = () => {
    const record = buildSavedRecord(currentAiResult, "Under Review");
    setSavedResults((items) => [record, ...items]);
    return record;
  };

  const deleteResult = (id) => {
    setSavedResults((items) => items.filter((item) => item.id !== id));
    setDeletedResultIds((items) => (items.includes(id) ? items : [...items, id]));
  };

  const submitReview = (payload, source = "Technician Review") => {
    const request = {
      id: `review-${Date.now()}`,
      farmerName: payload.farmerName || "Sample Farmer",
      location: payload.location || "Barangay Sample",
      description: payload.description || payload.observation || "Farmer requested human confirmation.",
      contactNumber: payload.contactNumber || "",
      submittedResult: currentAiResult.possibleIssue,
      confidence: currentAiResult.confidence,
      riskLevel: currentAiResult.riskLevel,
      status: "Under Review",
      source,
      submittedAt: formatDateTime(),
      timeline: [
        { label: "Request Submitted", status: "Completed" },
        { label: "Technician Review", status: "In Progress" },
        { label: "Recommendation Update", status: "Pending" },
      ],
    };
    setReviewRequests((items) => [request, ...items]);
    setLastReview(request);
    shareCurrentResult();
    return request;
  };

  const updateSettings = (patch) => setSettings((value) => ({ ...value, ...patch }));
  const updateConsentSettings = (patch) =>
    setConsentSettings((value) => ({ ...value, ...patch }));

  const value = useMemo(
    () => ({
      consentAccepted,
      setConsentAccepted,
      selectedImage,
      setSelectedImage,
      analysisMode,
      setAnalysisMode,
      currentAiResult,
      setCurrentAiResult,
      runMockAnalysis,
      savedResults,
      historyItems,
      saveCurrentResult,
      shareCurrentResult,
      deleteResult,
      reviewRequests,
      lastReview,
      submitReview,
      settings,
      updateSettings,
      consentSettings,
      updateConsentSettings,
    }),
    [
      consentAccepted,
      selectedImage,
      analysisMode,
      currentAiResult,
      savedResults,
      deletedResultIds,
      historyItems,
      reviewRequests,
      lastReview,
      settings,
      consentSettings,
    ]
  );

  const appClasses = [
    "app-root",
    settings.highContrastMode ? "high-contrast" : "",
    settings.textSize === "large" ? "large-text" : "",
    settings.simpleMode ? "simple-mode" : "",
  ].join(" ");

  return (
    <AppContext.Provider value={value}>
      <div className={appClasses}>
        <div className="app-frame">{children}</div>
      </div>
    </AppContext.Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/consent" element={<Consent />} />
          <Route path="/privacy-details" element={<PrivacyDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/image-preview" element={<ImagePreview />} />
          <Route path="/photo-guide" element={<PhotoGuide />} />
          <Route path="/poor-image" element={<PoorImageWarning />} />
          <Route path="/analyzing" element={<Analyzing />} />
          <Route path="/result" element={<Result />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/treatment-warning" element={<TreatmentWarning />} />
          <Route path="/save-confirmation" element={<SaveConfirmation />} />
          <Route path="/technician-support" element={<TechnicianSupport />} />
          <Route path="/report-wrong-result" element={<ReportWrongResult />} />
          <Route path="/review-submitted" element={<ReviewSubmitted />} />
          <Route path="/review-status" element={<ReviewStatus />} />
          <Route path="/history" element={<History />} />
          <Route path="/result-details/:id" element={<ResultDetails />} />
          <Route path="/delete-confirmation/:id" element={<DeleteConfirmation />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/help/:articleId" element={<HelpArticle />} />
          <Route path="/common-problems" element={<CommonProblems />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/manage-consent" element={<ManageConsent />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
