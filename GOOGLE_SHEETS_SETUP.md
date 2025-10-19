# Google Sheets Setup Instructions

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "BuyMyProvider Waitlist"
4. Add the following headers in row 1:
   - A1: `Timestamp`
   - B1: `Full Name`
   - C1: `Company Name`
   - D1: `Email`
   - E1: `WhatsApp`
   - F1: `User Type`
   - G1: `Country`
   - H1: `Categories`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.fullName,
      data.companyName,
      data.email,
      data.whatsapp,
      data.userType,
      data.country,
      data.categories
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon)
5. Name your project "BuyMyProvider Waitlist Handler"

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon next to "Select type" → Choose **Web app**
3. Configure:
   - Description: "Waitlist form handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Click **Authorize access**
6. Choose your Google account
7. Click **Advanced** → **Go to [project name] (unsafe)**
8. Click **Allow**
9. Copy the **Web app URL** (it should look like: `https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec`)

## Step 4: Update the React App

1. Open `src/components/WaitlistForm.tsx`
2. Find line 87 where it says:
   ```typescript
   "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec",
   ```
3. Replace `YOUR_DEPLOYMENT_ID` with the deployment ID from your Web app URL

## Step 5: Test the Integration

1. Submit the form on your website
2. Check your Google Sheet - a new row should appear with the form data
3. If it doesn't work, check the console for errors and verify:
   - The deployment URL is correct
   - The script is deployed with "Anyone" access
   - The sheet headers match exactly

## Troubleshooting

- **CORS errors**: The `mode: "no-cors"` setting should handle this, but you won't be able to read the response
- **No data appearing**: Check that the Apps Script is properly deployed and authorized
- **Permission errors**: Make sure the script runs as "Me" and allows "Anyone" access

## Optional: Email Notifications

To receive email notifications when someone joins the waitlist, add this to your Apps Script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp,
      data.fullName,
      data.companyName,
      data.email,
      data.whatsapp,
      data.userType,
      data.country,
      data.categories
    ]);
    
    // Send email notification
    MailApp.sendEmail({
      to: "your-email@example.com",
      subject: "New BuyMyProvider Waitlist Signup",
      body: "New signup:\n\n" +
            "Name: " + data.fullName + "\n" +
            "Company: " + data.companyName + "\n" +
            "Email: " + data.email + "\n" +
            "WhatsApp: " + data.whatsapp + "\n" +
            "Type: " + data.userType + "\n" +
            "Country: " + data.country + "\n" +
            "Categories: " + data.categories
    });
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

Replace `your-email@example.com` with your actual email address.
