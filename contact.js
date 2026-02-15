document.addEventListener("DOMContentLoaded", function () {
    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
        "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
        "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
        "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
        "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (Swaziland)", "Ethiopia", "Fiji", "Finland",
        "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
        "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
        "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
        "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
        "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru",
        "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
        "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
        "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "São Tomé and Príncipe",
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
        "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
        "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    const countryInput = document.getElementById("country");
    const suggestionsContainer = document.getElementById("countrySuggestions");

    countryInput.addEventListener("input", function () {
        const userInput = countryInput.value.toLowerCase();
        suggestionsContainer.innerHTML = "";

        if (userInput.length === 0) {
            suggestionsContainer.style.display = "none";
            return;
        }

        const filteredCountries = countries.filter(country =>
            country.toLowerCase().startsWith(userInput)
        ).slice(0, 5); // Show only top 5 matches

        if (filteredCountries.length > 0) {
            suggestionsContainer.style.display = "block";
            filteredCountries.forEach(country => {
                const div = document.createElement("div");
                div.textContent = country;
                div.classList.add("suggestion-item");
                div.addEventListener("click", function () {
                    countryInput.value = country;
                    suggestionsContainer.style.display = "none";
                });
                suggestionsContainer.appendChild(div);
            });
        } else {
            suggestionsContainer.style.display = "none";
        }
    });

    document.addEventListener("click", function (e) {
        if (!suggestionsContainer.contains(e.target) && e.target !== countryInput) {
            suggestionsContainer.style.display = "none";
        }
    });






    const countriesWithCodes = {
        "Afghanistan": "+93", "Albania": "+355", "Algeria": "+213", "Andorra": "+376", "Angola": "+244", "Antigua and Barbuda": "+1-268", "Argentina": "+54", "Armenia": "+374", "Australia": "+61", "Austria": "+43",
        "Azerbaijan": "+994", "Bahamas": "+1-242", "Bahrain": "+973", "Bangladesh": "+880", "Barbados": "+1-246", "Belarus": "+375", "Belgium": "+32", "Belize": "+501", "Benin": "+229", "Bhutan": "+975",
        "Bolivia": "+591", "Bosnia and Herzegovina": "+387", "Botswana": "+267", "Brazil": "+55", "Brunei": "+673", "Bulgaria": "+359", "Burkina Faso": "+226", "Burundi": "+257", "Cabo Verde": "+238", "Cambodia": "+855",
        "Cameroon": "+237", "Canada": "+1", "Central African Republic": "+236", "Chad": "+235", "Chile": "+56", "China": "+86", "Colombia": "+57", "Comoros": "+269", "Congo (Congo-Brazzaville)": "+242",
        "Costa Rica": "+506", "Croatia": "+385", "Cuba": "+53", "Cyprus": "+357", "Czechia": "+420", "Democratic Republic of the Congo": "+243", "Denmark": "+45", "Djibouti": "+253", "Dominica": "+1-767", "Dominican Republic": "+1-809",
        "Ecuador": "+593", "Egypt": "+20", "El Salvador": "+503", "Equatorial Guinea": "+240", "Eritrea": "+291", "Estonia": "+372", "Eswatini (Swaziland)": "+268", "Ethiopia": "+251", "Fiji": "+679", "Finland": "+358",
        "France": "+33", "Gabon": "+241", "Gambia": "+220", "Georgia": "+995", "Germany": "+49", "Ghana": "+233", "Greece": "+30", "Grenada": "+1-473", "Guatemala": "+502", "Guinea": "+224",
        "Guinea-Bissau": "+245", "Guyana": "+592", "Haiti": "+509", "Honduras": "+504", "Hungary": "+36", "Iceland": "+354", "India": "+91", "Indonesia": "+62", "Iran": "+98", "Iraq": "+964",
        "Ireland": "+353", "Israel": "+972", "Italy": "+39", "Jamaica": "+1-876", "Japan": "+81", "Jordan": "+962", "Kazakhstan": "+7", "Kenya": "+254", "Kiribati": "+686", "Kuwait": "+965",
        "Kyrgyzstan": "+996", "Laos": "+856", "Latvia": "+371", "Lebanon": "+961", "Lesotho": "+266", "Liberia": "+231", "Libya": "+218", "Liechtenstein": "+423", "Lithuania": "+370", "Luxembourg": "+352",
        "Madagascar": "+261", "Malawi": "+265", "Malaysia": "+60", "Maldives": "+960", "Mali": "+223", "Malta": "+356", "Marshall Islands": "+692", "Mauritania": "+222", "Mauritius": "+230", "Mexico": "+52",
        "Micronesia": "+691", "Moldova": "+373", "Monaco": "+377", "Mongolia": "+976", "Montenegro": "+382", "Morocco": "+212", "Mozambique": "+258", "Myanmar (Burma)": "+95", "Namibia": "+264", "Nauru": "+674",
        "Nepal": "+977", "Netherlands": "+31", "New Zealand": "+64", "Nicaragua": "+505", "Niger": "+227", "Nigeria": "+234", "North Korea": "+850", "North Macedonia": "+389", "Norway": "+47", "Oman": "+968",
        "Pakistan": "+92", "Palau": "+680", "Palestine": "+970", "Panama": "+507", "Papua New Guinea": "+675", "Paraguay": "+595", "Peru": "+51", "Philippines": "+63", "Poland": "+48", "Portugal": "+351",
        "Qatar": "+974", "Romania": "+40", "Russia": "+7", "Rwanda": "+250", "Saint Kitts and Nevis": "+1-869", "Saint Lucia": "+1-758", "Saint Vincent and the Grenadines": "+1-784", "Samoa": "+685", "San Marino": "+378", "São Tomé and Príncipe": "+239",
        "Saudi Arabia": "+966", "Senegal": "+221", "Serbia": "+381", "Seychelles": "+248", "Sierra Leone": "+232", "Singapore": "+65", "Slovakia": "+421", "Slovenia": "+386", "Solomon Islands": "+677", "Somalia": "+252",
        "South Africa": "+27", "South Korea": "+82", "South Sudan": "+211", "Spain": "+34", "Sri Lanka": "+94", "Sudan": "+249", "Suriname": "+597", "Sweden": "+46", "Switzerland": "+41", "Syria": "+963",
        "Taiwan": "+886", "Tajikistan": "+992", "Tanzania": "+255", "Thailand": "+66", "Timor-Leste": "+670", "Togo": "+228", "Tonga": "+676", "Trinidad and Tobago": "+1-868", "Tunisia": "+216", "Turkey": "+90",
        "Turkmenistan": "+993", "Tuvalu": "+688", "Uganda": "+256", "Ukraine": "+380", "United Arab Emirates": "+971", "United Kingdom": "+44", "United States": "+1", "Uruguay": "+598", "Uzbekistan": "+998", "Vanuatu": "+678",
        "Vatican City": "+379", "Venezuela": "+58", "Vietnam": "+84", "Yemen": "+967", "Zambia": "+260", "Zimbabwe": "+263"
    };


    const countryPhoneLengths = {
        "Afghanistan": 9,
        "Albania": 9,
        "Algeria": 9,
        "Andorra": 6,
        "Angola": 9,
        "Antigua and Barbuda": 10,
        "Argentina": 10,
        "Armenia": 8,
        "Australia": 9,
        "Austria": 10,
        "Azerbaijan": 9,
        "Bahamas": 10,
        "Bahrain": 8,
        "Bangladesh": 10,
        "Barbados": 10,
        "Belarus": 9,
        "Belgium": 9,
        "Belize": 7,
        "Benin": 8,
        "Bhutan": 8,
        "Bolivia": 8,
        "Bosnia and Herzegovina": 8,
        "Botswana": 7,
        "Brazil": 11,
        "Brunei": 7,
        "Bulgaria": 9,
        "Burkina Faso": 8,
        "Burundi": 8,
        "Cabo Verde": 7,
        "Cambodia": 9,
        "Cameroon": 9,
        "Canada": 10,
        "Central African Republic": 8,
        "Chad": 7,
        "Chile": 9,
        "China": 11,
        "Colombia": 10,
        "Comoros": 7,
        "Congo (Congo-Brazzaville)": 9,
        "Costa Rica": 8,
        "Croatia": 9,
        "Cuba": 8,
        "Cyprus": 8,
        "Czechia": 9,
        "Democratic Republic of the Congo": 9,
        "Denmark": 8,
        "Djibouti": 8,
        "Dominica": 10,
        "Dominican Republic": 10,
        "Ecuador": 9,
        "Egypt": 10,
        "El Salvador": 8,
        "Equatorial Guinea": 9,
        "Eritrea": 7,
        "Estonia": 7,
        "Eswatini (Swaziland)": 8,
        "Ethiopia": 9,
        "Fiji": 7,
        "Finland": 10,
        "France": 9,
        "Gabon": 8,
        "Gambia": 7,
        "Georgia": 9,
        "Germany": 10,
        "Ghana": 9,
        "Greece": 10,
        "Grenada": 10,
        "Guatemala": 8,
        "Guinea": 9,
        "Guinea-Bissau": 7,
        "Guyana": 7,
        "Haiti": 8,
        "Honduras": 8,
        "Hungary": 9,
        "Iceland": 7,
        "India": 10,
        "Indonesia": 10,
        "Iran": 10,
        "Iraq": 10,
        "Ireland": 9,
        "Israel": 9,
        "Italy": 10,
        "Jamaica": 10,
        "Japan": 10,
        "Jordan": 9,
        "Kazakhstan": 10,
        "Kenya": 10,
        "Kiribati": 8,
        "Kuwait": 8,
        "Kyrgyzstan": 9,
        "Laos": 10,
        "Latvia": 8,
        "Lebanon": 8,
        "Lesotho": 8,
        "Liberia": 7,
        "Libya": 10,
        "Liechtenstein": 9,
        "Lithuania": 8,
        "Luxembourg": 9,
        "Madagascar": 9,
        "Malawi": 9,
        "Malaysia": 9,
        "Maldives": 7,
        "Mali": 8,
        "Malta": 8,
        "Marshall Islands": 7,
        "Mauritania": 8,
        "Mauritius": 7,
        "Mexico": 10,
        "Micronesia": 7,
        "Moldova": 8,
        "Monaco": 8,
        "Mongolia": 8,
        "Montenegro": 8,
        "Morocco": 9,
        "Mozambique": 9,
        "Myanmar (Burma)": 9,
        "Namibia": 9,
        "Nauru": 7,
        "Nepal": 10,
        "Netherlands": 9,
        "New Zealand": 9,
        "Nicaragua": 8,
        "Niger": 8,
        "Nigeria": 10,
        "North Korea": 10,
        "North Macedonia": 8,
        "Norway": 8,
        "Oman": 8,
        "Pakistan": 10,
        "Palau": 7,
        "Palestine": 9,
        "Panama": 8,
        "Papua New Guinea": 8,
        "Paraguay": 9,
        "Peru": 9,
        "Philippines": 10,
        "Poland": 9,
        "Portugal": 9,
        "Qatar": 8,
        "Romania": 9,
        "Russia": 10,
        "Rwanda": 9,
        "Saint Kitts and Nevis": 10,
        "Saint Lucia": 10,
        "Saint Vincent and the Grenadines": 10,
        "Samoa": 7,
        "San Marino": 10,
        "São Tomé and Príncipe": 7,
        "Saudi Arabia": 9,
        "Senegal": 9,
        "Serbia": 9,
        "Seychelles": 7,
        "Sierra Leone": 8,
        "Singapore": 8,
        "Slovakia": 9,
        "Slovenia": 8,
        "Solomon Islands": 7,
        "Somalia": 9,
        "South Africa": 9,
        "South Korea": 10,
        "South Sudan": 9,
        "Spain": 9,
        "Sri Lanka": 9,
        "Sudan": 9,
        "Suriname": 7,
        "Sweden": 9,
        "Switzerland": 9,
        "Syria": 9,
        "Taiwan": 9,
        "Tajikistan": 9,
        "Tanzania": 9,
        "Thailand": 9,
        "Timor-Leste": 7,
        "Togo": 8,
        "Tonga": 5,
        "Trinidad and Tobago": 10,
        "Tunisia": 8,
        "Turkey": 10,
        "Turkmenistan": 8,
        "Tuvalu": 6,
        "Uganda": 9,
        "Ukraine": 9,
        "United Arab Emirates": 9,
        "United Kingdom": 10,
        "United States": 10,
        "Uruguay": 9,
        "Uzbekistan": 9,
        "Vanuatu": 7,
        "Vatican City": 9,
        "Venezuela": 10,
        "Vietnam": 9,
        "Yemen": 9,
        "Zambia": 9,
        "Zimbabwe": 9
    };


    const phoneInput = document.getElementById("phone");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    // Function to add country code
    function addCountryCode() {
        const userCountry = countryInput.value.trim();
        const countryCode = countriesWithCodes[userCountry];

        if (countryCode) {
            // Remove any existing country code to prevent duplication
            phoneInput.value = phoneInput.value.replace(/^\+\d+\s?/, "");
            // Add the correct country code
            phoneInput.value = countryCode + " " + phoneInput.value;
        }
    }

    // When user selects a country from suggestions
    document.getElementById("countrySuggestions").addEventListener("click", function (e) {
        if (e.target.classList.contains("suggestion-item")) {
            countryInput.value = e.target.textContent; // Set input field with selected country
            addCountryCode(); // Apply country code immediately
        }
    });


   
    let sections = document.querySelectorAll("#contactSections section"); // Select all sections
    let currentStep = 0; // Track current step

    function showStep(step) {
        sections.forEach((section, index) => {
            section.style.display = index === step ? "flex" : "none";
        });
    }

    function nextStep() {
        if (currentStep < sections.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    // Initial visibility setup
    showStep(currentStep);

    document.getElementById("summary").addEventListener("click", function () {
        currentStep = sections.length - 2; // Move to the summary section
        showStep(currentStep);
        updateSummary(); //Call function to populate summary details
    });
    
    
    document.querySelectorAll("[id='submit']").forEach(button => {
        button.addEventListener("click", function () {
            // Select all visible agreement checkboxes
            const visibleAgreements = Array.from(document.querySelectorAll("#agreementCheckbox"))
                .filter(checkbox => checkbox.offsetParent !== null); // Only visible ones
    
            const allChecked = visibleAgreements.every(cb => cb.checked);
    
            if (!allChecked) {
                alert("Please agree to our Privacy Policy and Terms & Conditions before submitting.");
                return;
            }
    
            submitForm();
        });
    });
    
    


    

    function submitForm() {
        // Show loader by removing the class
        document.getElementById("preloader").classList.remove("hide-preloader");

        // Capture user inputs
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const country = document.getElementById("country").value;
        const needs = document.getElementById("needs").value;
        const companyname = document.getElementById("companyname").value;
        const yourwork = document.getElementById("yourwork").value;

        // Get checked services
        const services = Array.from(document.querySelectorAll("input[name='service']:checked"))
            .map(input => input.value)
            .join(", ");

        // Get contact preferences
        const contactOptions = Array.from(document.querySelectorAll("input[name='contactoptions']:checked"))
            .map(input => input.value)
            .join(", ");

        // Get "How did you hear about us?"
        const howFoundUs = Array.from(document.querySelectorAll("input[name='how_found_us']:checked"))
            .map(input => input.value)
            .join(", ");

        // Google Forms URL (Replace with your actual form's entry IDs)
        const googleFormURL = "https://docs.google.com/forms/d/1IMxb_5xEKJ0gqx76bk96SIq0JDHhm5xZLSOGlH-LRcw/formResponse";

        // Construct form data as URL parameters
        const formData = new URLSearchParams({
            "entry.1648214529": name,         // Replace with actual Google Forms entry ID
            "entry.1716787193": email,
            "entry.1602480740": phone,
            "entry.1746512281": country,
            "entry.2030656252": needs,
            "entry.1508902224": services,
            "entry.1053593283": companyname,
            "entry.373617029": yourwork,
            "entry.1406391257": contactOptions,
            "entry.1747396390": howFoundUs
        });

        // Send form data to Google Forms silently
        fetch(googleFormURL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData.toString()
        })
            .then(() => {
                // Hide loader and show success modal
                document.getElementById("preloader").classList.add("hide-preloader");
                currentStep = sections.length - 1; // Ensure it moves to the last section
showStep(currentStep); // Display the "Thank You" section
            })
            .catch(error => console.error("Error submitting form:", error));
    }


    





    

    // Attach event listeners to Prev buttons
    document.querySelectorAll(".prev").forEach(button => {
        button.addEventListener("click", prevStep);
    });

    // Attach event listeners to Next buttons with validation
    document.querySelectorAll(".next").forEach((button, index) => {
        button.addEventListener("click", function (e) {
            e.preventDefault();

            // Validate the current step before proceeding
            let isValid = false;

            if (index === 0) isValid = validateStep1();
            if (index === 1) isValid = validateStep2();
            if (index === 2) isValid = validateStep3();
            if (index === 3) isValid = validateStep4();

            if (isValid) {
                nextStep();
            }
        });
    });


    

    
    

    function validateStep1() {
        const userCountry = countryInput.value.trim();
        const phoneNumber = phoneInput.value.replace(/^\+?\d+\s*/, '').trim();
        const expectedLength = countryPhoneLengths[userCountry];
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        if (!name || !email || !userCountry || !phone) {
            alert("⚠ All fields must be filled out!");
            return false;
        }

        if (!/^[A-Za-z\s]+$/.test(name)) {
            nameInput.setCustomValidity("Name must contain only letters and spaces.");
            nameInput.reportValidity();
            return false;
        } else {
            nameInput.setCustomValidity("");
        }

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            emailInput.setCustomValidity("Please enter a valid email address.");
            emailInput.reportValidity();
            return false;
        } else {
            emailInput.setCustomValidity("");
        }

        if (!countriesWithCodes[userCountry]) {
            countryInput.setCustomValidity("Please enter a valid country name from the suggestions.");
            countryInput.reportValidity();
            return false;
        } else {
            countryInput.setCustomValidity("");
        }

        if (!/^\d+$/.test(phoneNumber)) {
            phoneInput.setCustomValidity("Phone number must contain only digits.");
            phoneInput.reportValidity();
            return false;
        } else {
            phoneInput.setCustomValidity("");
        }

        if (expectedLength && phoneNumber.length !== expectedLength) {
            phoneInput.setCustomValidity(`Invalid phone number length for ${userCountry}. Expected ${expectedLength} digits.`);
            phoneInput.reportValidity();
            return false;
        } else {
            phoneInput.setCustomValidity("");
        }

        addCountryCode();
        return true;
    }

    function validateStep2() {
        const needsInput = document.getElementById("needs");
        const checkboxes = document.querySelectorAll('input[name="service"]:checked');

        if (!needsInput.value.trim() || needsInput.value.trim().length < 15) {
            needsInput.setCustomValidity("Please provide a detailed description (at least 15 characters).");
            needsInput.reportValidity();
            return false;
        } else {
            needsInput.setCustomValidity("");
        }

        if (checkboxes.length === 0) {
            alert("⚠ Please select at least one service!");
            return false;
        }
        return true;
    }

    function validateStep3() {
        const companyNameInput = document.getElementById("companyname");
        const yourWorkInput = document.getElementById("yourwork");

        if (!companyNameInput.value.trim()) {
            companyNameInput.setCustomValidity("Please enter your company name or personal brand.");
            companyNameInput.reportValidity();
            return false;
        } else {
            companyNameInput.setCustomValidity("");
        }

        if (!yourWorkInput.value.trim() || yourWorkInput.value.trim().length < 15) {
            yourWorkInput.setCustomValidity("Please provide a detailed description of your work (at least 15 characters).");
            yourWorkInput.reportValidity();
            return false;
        } else {
            yourWorkInput.setCustomValidity("");
        }
        return true;
    }

    function validateStep4() {
        const contactOptions = document.querySelectorAll('input[name="contactoptions"]:checked');
        const howFoundUs = document.querySelectorAll('input[name="how_found_us"]:checked');

        if (contactOptions.length === 0) {
            alert("⚠ Please select at least one preferred contact method!");
            return false;
        }

        if (howFoundUs.length === 0) {
            alert("⚠ Please select at least one option for how you heard about us!");
            return false;
        }
        return true;
    }

});