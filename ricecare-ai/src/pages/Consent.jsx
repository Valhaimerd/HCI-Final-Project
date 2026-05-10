import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRiceCare } from "../App";
import { ActionStack, AppShell, Button, Card, Icon } from "../components";

const items = [
  {
    title: "Advisory support only",
    detail: "I understand this is not a final diagnosis and should be verified.",
  },
  {
    title: "Allow image analysis",
    detail: "I consent to the AI processing my uploaded crop images.",
  },
  {
    title: "Human confirmation option",
    detail: "I acknowledge I can override or report incorrect AI suggestions.",
  },
];

export default function Consent() {
  const navigate = useNavigate();
  const { setConsentAccepted } = useRiceCare();
  const [checked, setChecked] = useState([true, true, true]);
  const accepted = useMemo(() => checked.every(Boolean), [checked]);

  const toggle = (index) => {
    setChecked((value) => value.map((item, itemIndex) => (itemIndex === index ? !item : item)));
  };

  const continueToHome = () => {
    setConsentAccepted(true);
    navigate("/home");
  };

  return (
    <AppShell showNav={false} className="no-nav consent-screen">
      <section className="consent-intro" aria-labelledby="consent-title">
        <h1 id="consent-title">Before You Start</h1>
        <p>
          RiceCare AI analyzes plant images to suggest possible pest or disease problems.
          Your image is used only for analysis and advisory support.
        </p>
      </section>

      <Card className="consent-privacy-card">
        <span className="consent-icon-badge" aria-hidden="true">
          <Icon name="shieldwithlock" size={30} />
        </span>
        <h2>Data Privacy Assured</h2>
        <p>
          We process images locally when possible and do not store sensitive farm data
          without your explicit permission.
        </p>
      </Card>

      <section className="consent-options" aria-label="Consent confirmations">
        {items.map((item, index) => (
          <label className="consent-option" key={item.title}>
            <input
              className="consent-checkbox"
              type="checkbox"
              checked={checked[index]}
              onChange={() => toggle(index)}
            />
            <span className="consent-option-copy">
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </span>
          </label>
        ))}
      </section>

      <ActionStack className="consent-actions">
        <Button onClick={continueToHome} disabled={!accepted}>I Agree and Continue</Button>
      </ActionStack>
    </AppShell>
  );
}
