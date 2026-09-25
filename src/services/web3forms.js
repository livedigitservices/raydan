/**
 * Web3Forms API Service
 * Integration for zero-backend email delivery via Web3Forms (https://web3forms.com)
 */

export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

/**
 * Submit form payload to Web3Forms API
 * @param {Object} options
 * @param {string} [options.subject] - Email subject line
 * @param {string} [options.fromName] - Sender label name
 * @param {Object} options.data - Key-value pair object containing form inputs
 * @param {string} [options.accessKey] - Custom access key override
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function submitToWeb3Forms({
  subject = "New Project Inquiry - RAYDAN CONSTRUCTIONS",
  fromName = "RAYDAN CONSTRUCTIONS Website",
  data = {},
  accessKey = WEB3FORMS_ACCESS_KEY
}) {
  const keyToUse = accessKey || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

  if (!keyToUse) {
    console.warn("[Web3Forms] VITE_WEB3FORMS_ACCESS_KEY is not defined in .env. Please set your Web3Forms access key.");
  }

  const payload = {
    access_key: keyToUse,
    subject: subject,
    from_name: fromName,
    botcheck: false,
    timestamp: new Date().toISOString(),
    ...data
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("[Web3Forms] Error sending form request:", error);
    return {
      success: false,
      message: error.message || "Network request failed. Please check your connection and try again."
    };
  }
}

export default submitToWeb3Forms;
