export default function generateHtmlFromTemplate(rowData) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>बोर्ड परीक्षा 2026 फॉर्म</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
            padding: 20px;
        }
        .a4-page {
            width: 100%;
            max-width: 210mm;
            min-height: 297mm;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 25mm;
            box-sizing: border-box;
        }
        .form-field {
            display: flex;
            align-items: center;
            padding: 4px 0;
            width: 100%;
        }
        .form-label {
            flex-shrink: 0;
            width: auto;
            font-size: 0.875rem;
            color: #333;
            padding-right: 8px;
            white-space: nowrap;
        }
        .form-input {
            flex-grow: 1;
            border: none;
            border-bottom: 1px solid #ccc;
            padding: 2px 0;
            font-size: 0.875rem;
            color: #555;
            outline: none;
            background-color: transparent;
            width: 100%;
            min-width: 0;
        }
        .signature-box {
            width: 150px;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.75rem;
            color: #999;
            overflow: hidden;
        }
        .signature-img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
        .two-col-container {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 8px;
        }
        .two-col-item {
            flex: 1;
            min-width: 280px;
            padding-right: 16px;
        }
        .two-col-item:last-child {
            padding-right: 0;
        }
        @media (max-width: 768px) {
            .a4-page {
                padding: 15mm;
            }
            .form-label {
                width: auto;
                white-space: normal;
            }
            .two-col-item {
                flex: 1 1 100%;
                padding-right: 0;
            }
        }
    </style>
</head>
<body>
    <div class="a4-page flex flex-col">
        <!-- हेडर सेक्शन -->
        <div class="flex justify-between items-start mb-6">
            <div class="text-sm">परीक्षण/2026</div>
            <div class="flex flex-col items-center text-center">
                <div class="text-base font-semibold">माध्यमिक शिक्षा बोर्ड, राजस्थान, अजमेर</div>
                <div class="text-sm font-medium mt-1">आवेदन पत्र एवं परीक्षा शुल्क विवरण वर्ष - 2026</div>
            </div>
            <div class="text-sm">परीक्षा प्रपत्र - 128</div>
        </div>
        <!-- मुख्य फॉर्म सेक्शन -->
        <div class="flex flex-col flex-grow">
            <!-- पहली पंक्ति (विद्यालय का नाम) -->
            <div class="two-col-container">
                <div class="two-col-item">
                    <div class="form-field">
                        <span class="form-label">विद्यालय का नाम -</span>
                        <p id="schoolName" type="text" class="form-input" />
                    </div>
                </div>
                <div class="two-col-item">
                    <div class="form-field">
                        <span class="form-label">विद्यालय कोड -</span>
                        <p id="schoolCode" type="text" class="form-input" />
                    </div>
                </div>
            </div>
            <!-- दूसरी पंक्ति (संस्थाप्रधान का नाम) -->
            <div class="two-col-container">
                <div class="two-col-item">
                    <div class="form-field">
                        <span class="form-label">संस्थाप्रधान का नाम -</span>
                        <p id="principalName" type="text" class="form-input" />
                    </div>
                </div>
                <div class="two-col-item">
                    <div class="form-field">
                        <span class="form-label">मोबाइल नं. -</span>
                        <p id="principalMobileNo" type="text" class="form-input" />
                    </div>
                </div>
            </div>
            <!-- कक्षा 12 नियमित आवेदन -->
            <div class="flex flex-col">
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कक्षा 12 कुल (नियमित) आवेदन -</span>
                            <p id="class12RegTotalForm" type="text" class="form-input" />
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कुल शुल्क -</span>
                            <p id="class12RegTotalFee" type="text" class="form-input" />
                        </div>
                    </div>
                </div>
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 1 -</span>
                            <p id="class12RegTxnNo1" type="text" class="form-input" />
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class12RegTxnNo1Date" type="text" class="form-input" />
                        </div>
                    </div>
                </div>
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 2 -</span>
                            <p id="class12RegTxnNo2" type="text" class="form-input" />
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class12RegTxnNo2Date" type="text" class="form-input" />
                        </div>
                    </div>
                </div>
                <div class="two-col-container">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 3 -</span>
                            <p id="class12RegTxnNo3" type="text" class="form-input" />
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class12RegTxnNo3Date" type="text" class="form-input" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- कक्षा 12 स्वयंपाठी आवेदन -->
            <div class="flex flex-col">
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कक्षा 12 कुल (स्वयंपाठी) आवेदन -</span>
                            <p id="class12PriTotal" type="text" class="form-input" />
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कुल शुल्क -</span>
                            <p id="class12PriTotalFee" type="text" class="form-input" />
                        </div>
                    </div>
                </div>
                <div class="two-col-container">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 1 -</span>
                            <p id="class12PriTxnNo1" type="text" class="form-input" />
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class12PriTxnNo1Date" type="text" class="form-input" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- कक्षा 10 नियमित आवेदन -->
            <div class="flex flex-col">
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कक्षा 10 कुल (नियमित) आवेदन -</span>
                            <p id="class10RegTotalForms" type="text" class="form-input" />
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कुल शुल्क -</span>
                            <p id="class10RegTotalFee" type="text" class="form-input" />
                        </div>
                    </div>
                </div>
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 1 -</span>
                            <p id="class10RegTxnNo1" type="text" class="form-input" />
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class10RegTxnNo1Date" type="text" class="form-input" />
                        </div>
                    </div>
                </div>
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 2 -</span>
                            <p id="class10RegTxnNo2" type="text" class="form-input" />
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class10RegTxnNo2Date" type="text" class="form-input" />
                        </div>
                    </div>
                </div>
                <div class="two-col-container">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 3 -</span>
                            <p id="class10RegTxnNo3" type="text" class="form-input" />
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class10RegTxnNo3Date" type="text" class="form-input" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- कक्षा 10 स्वयंपाठी आवेदन -->
            <div class="flex flex-col">
                <div class="two-col-container mb-1">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कक्षा 10 कुल (स्वयंपाठी) आवेदन -</span>
                            <p id="class10PriTotal" type="text" class="form-input" />
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">कुल शुल्क -</span>
                            <p id="class10PriTotalFee" type="text" class="form-input" />
                        </div>
                    </div>
                </div>
                <div class="two-col-container">
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">ट्रांजेक्शन नं. 1 -</span>
                            <p id="class10PriTxnNo1" type="text" class="form-input" />
                        </div>
                    </div>
                    <div class="two-col-item">
                        <div class="form-field">
                            <span class="form-label">दिनांक -</span>
                            <p id="class10PriTxnNo1Date" type="text" class="form-input" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- हस्ताक्षर सेक्शन 1 -->
            <div class="flex justify-end mb-8">
                <div class="flex flex-col items-center mr-16">
                    <div class="signature-box mb-1">
                        <img src="signature.jpg" alt="हस्ताक्षर प्लेसहोल्डर" class="signature-img">
                    </div>
                    <div class="text-sm font-medium">हस्ताक्षर प्रभारी</div>
                    <div class="text-xs text-gray-600"></div>
                </div>
                <div class="flex flex-col items-center">
                    <div class="signature-box mb-1">
                        <img src="signature.jpg" alt="हस्ताक्षर प्लेसहोल्डर" class="signature-img">
                    </div>
                    <div class="text-sm font-medium">हस्ताक्षर प्रभारी</div>
                    <div class="text-xs text-gray-600">बोर्ड नोडल केंद्र (04/20)</div>
                </div>
            </div>
            <!-- उपस्थिति प्रमाण पत्र सेक्शन -->
            <div class="flex flex-col items-center text-center mb-8">
                <div class="text-base font-semibold mb-2">कार्यालय बोर्ड नोडल केंद्र पीएम महात्मा गांधी राजकीय विद्यालय स्टेशन रोड बाड़मेर</div>
                <div class="text-sm font-medium mb-4 underline">उपस्थिति प्रमाण पत्र</div>
            </div>
            <div class="two-col-container mb-2">
                <div class="two-col-item">
                    <div class="form-field">
                        <span class="form-label">क्रमांक -</span>
                        <input type="text" class="form-input" />
                    </div>
                </div>
                <div class="two-col-item">
                    <div class="form-field">
                        <span class="form-label">दिनांक -</span>
                        <p id="attendanceDate" type="text" class="form-input" />
                    </div>
                </div>
            </div>
            <div class="two-col-container mb-2">
                <div class="two-col-item">
                    <div class="form-field">
                        <span class="form-label">प्रमाणित किया जाता है कि श्री/श्रीमती -</span>
                        <p id="EmployeeName" type="text" class="form-input" />
                    </div>
                </div>
                <div class="two-col-item">
                    <div class="form-field">
                        <span class="form-label">पद -</span>
                        <p id="Designation" type="text" class="form-input" />
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap items-center mb-8">
                <div class="form-field flex-1 mr-2">
                    <span class="form-label">पदस्थापन स्थान -</span>
                    <p id="postingPlace" type="text" class="form-input" />
                </div>
                <span class="text-sm mr-2">ने बोर्ड परीक्षा 2026 के आवेदन पत्र</span>
            </div>
            <div class="flex flex-wrap items-center mb-8">
                <div class="form-field flex-1 mr-2">
                    <span class="form-label">जमा करवाने हेतु आज दिनांक -</span>
                    <p id="attendanceDate" type="text" class="form-input" />
                </div>
                <span class="text-sm mr-2">को अपनी उपस्थिति इस कार्यालय में दी</span>
            </div>
            <!-- हस्ताक्षर सेक्शन 2 -->
            <div class="flex justify-end">
                <div class="flex flex-col items-center">
                    <div class="signature-box mb-1">
                        <img src="/signature.jpg" alt="हस्ताक्षर प्लेसहोल्डर" class="signature-img">
                    </div>
                    <div class="text-sm font-medium">हस्ताक्षर प्रभारी</div>
                    <div class="text-xs text-gray-600">बोर्ड नोडल केंद्र (04/20)</div>
                </div>
            </div>
        </div>
    </div>
    <script>
      const data = ${JSON.stringify(rowData)};
      Object.entries(data).forEach(([key, value]) => {
        let el = document.getElementById(key) || document.getElementById(toCamelCase(key));
        if (el) el.textContent = value;
      });
      function toCamelCase(str) {
        return str
          .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
          .replace(/[^a-zA-Z0-9]/g, '');
      }
    </script>
</body>
</html>
  `;
}