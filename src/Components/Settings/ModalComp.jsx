import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Modalcomp(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ width: "100%" }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Instructions for Generating App Passwords for Gmail:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Steps: </h4>
          <ol>
            <li>
              Go to{" "}
              <a href="https://myaccount.google.com">
                https://myaccount.google.com
              </a>
            </li>
            <li>
              On the left side, click on <b>Security</b>.
            </li>
            <li>
              Under "Sign in to Google," select <b>2-Step Verification</b>.
            </li>
            <li>
              Generate an OTP, enter it in the input box, and complete the
              two-step verification.
            </li>
            <li>
              Return to{" "}
              <a href="https://myaccount.google.com/security">
                https://myaccount.google.com/security
              </a>{" "}
              page.
            </li>
            <li>
              Click on <b>App passwords</b> below 2-Step Verification.
            </li>
            <li>
              It will prompt you to specify the app or device for which you want
              to generate the app password. For example: <b>Bulk Email</b>.
            </li>
            <li>Click the generate button.</li>
            <li>
              It will display a 12-digit generated app password. Copy and paste
              it into your website's password settings.
            </li>
            <li>
              Finally, compose and send an email using the email ID you set in
              the settings.
            </li>
          </ol>

          <br />
          <br />
          <h4>Note:</h4>
          <ul>
            <li>This tutorial is for Gmail users only.</li>
            <li>
              If you're using another mail service, follow similar steps
              provided by your email provider to create an app password.
            </li>
            <li>You can delete or update these settings whenever necessary.</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.onHide()}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalcomp;
