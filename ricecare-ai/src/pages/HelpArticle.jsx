import { Navigate, useParams } from "react-router-dom";
import { ActionStack, AdvisoryNotice, AppShell, Button, Card } from "../components";
import { helpArticles } from "../data/helpArticles";

export default function HelpArticle() {
  const { articleId } = useParams();
  const article = helpArticles.find((item) => item.id === articleId);

  if (!article) return <Navigate to="/help" replace />;

  return (
    <AppShell title={article.title} backTo="/help">
      <Card>
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
      </Card>
      {article.sections.map((section) => (
        <Card key={section.heading}>
          <h3>{section.heading}</h3>
          <p>{section.body}</p>
        </Card>
      ))}
      <AdvisoryNotice>{article.advisoryNote}</AdvisoryNotice>
      <AdvisoryNotice type="warning">{article.riskAwarenessNote}</AdvisoryNotice>
      <ActionStack>
        <Button to="/technician-support">Ask Technician Now</Button>
        <Button to="/help" variant="secondary">Back to Help</Button>
      </ActionStack>
    </AppShell>
  );
}
