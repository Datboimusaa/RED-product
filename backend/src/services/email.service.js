import * as Brevo from "@getbrevo/brevo";
import { BREVO_API_KEY } from "../config/env";

const apiInstance = new Brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  BREVO_API_KEY
);

export const sendEmail = async ({ to, subject, html }) => {
  try {
    await apiInstance.sendTransacEmail({
      sender: {
        email: "ousseynousow180@gmail.com",
        name: "Red Product",
      },
      to: [{ email: to }],
      subject,
      htmlContent: html,
    });
  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
};