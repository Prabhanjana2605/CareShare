// Sample organization data
const organizations = {
    food: [
        {
            id: 1,
            name: "Hope Shelter Home",
            type: "Shelter",
            description: "Providing food and shelter for homeless individuals and families",
            members: 85,
            address: "1234 Compassion Street, Downtown, City 10001",
            phone: "4747474747",
            email: "contact@hopeshelter.org",
            needs: "Rice, Vegetables, Cooked Meals"
        },
        {
            id: 2,
            name: "Sunshine Orphanage",
            type: "Orphanage",
            description: "A loving home for over 50 children, focusing on education and holistic care",
            members: 52,
            address: "56 Rainbow Lane, Uptown, City 10002",
            phone: "1313131313",
            email: "donate@sunshineorphanage.org",
            needs: "Milk, Fruits, Groceries"
        },
        {
            id: 3,
            name: "Grace Elder Care",
            type: "Old Age Home",
            description: "Dedicated to serving and enriching the lives of senior citizens",
            members: 40,
            address: "789 Serenity Avenue, Suburbia, City 10003",
            phone: "4646464646",
            email: "info@graceeldercare.org",
            needs: "Soft Foods, Nutritional Supplements"
        },
        {
            id: 4,
            name: "New Beginnings NGO",
            type: "NGO",
            description: "Helping families and individuals get back on their feet with essential supplies",
            members: 120,
            address: "4321 Renewal Road, Midtown, City 10004",
            phone: "2424242424",
            email: "aid@newbeginnings.org",
            needs: "Grains, Canned Goods, Cooking Oil"
        }
    ],
    clothes: [
        {
            id: 1,
            name: "Lighthouse Haven",
            type: "Community Center",
            description: "A community center supporting refugees and low-income families",
            members: 200,
            address: "876 Beacon Street, Lakeside, City 10005",
            phone: "7979797979",
            email: "support@lighthousehaven.org",
            needs: "Winter Coats, Children's Clothes, Shoes"
        },
        {
            id: 2,
            name: "Hope Shelter Home",
            type: "Shelter",
            description: "Providing food and shelter for homeless individuals and families",
            members: 85,
            address: "1234 Compassion Street, Downtown, City 10001",
            phone: "6868686868",
            email: "contact@hopeshelter.org",
            needs: "Men's Clothing, Socks, Blankets"
        }
    ],
    education: [
        {
            id: 1,
            name: "Bright Future Academy",
            type: "School",
            description: "Providing quality education to underprivileged children",
            members: 250,
            address: "222 Education Lane, City 10008",
            phone: "5757575757",
            email: "info@brightfuture.org",
            needs: "Books, Stationery, School Uniforms"
        }
    ],
    healthcare: [
        {
            id: 1,
            name: "Health Forward Clinic",
            type: "Medical Clinic",
            description: "A free clinic providing basic healthcare and medical aid to the underserved",
            members: 300,
            address: "111 Wellness Way, Med District, City 10006",
            phone: "8989898989",
            email: "admin@healthforward.org",
            needs: "Medical Supplies, First Aid Kits"
        }
    ],
    shelter: [
        {
            id: 1,
            name: "Hope Shelter Home",
            type: "Shelter",
            description: "Providing food and shelter for homeless individuals and families",
            members: 85,
            address: "1234 Compassion Street, Downtown, City 10001",
            phone: "7878787878",
            email: "contact@hopeshelter.org",
            needs: "Blankets, Beds, Towels"
        }
    ],
    essentials: [
        {
            id: 1,
            name: "Community Connect Foundation",
            type: "NGO",
            description: "Working in rural areas to provide essential goods and educational support",
            members: 180,
            address: "2468 Unity Circle, Countryside, City 10007",
            phone: "6767676767",
            email: "outreach@communityconnect.org",
            needs: "Hygiene Kits, Soap, Toothpaste"
        }
    ],
    animal: [
        {
            id: 1,
            name: "Paws & Claws Rescue",
            type: "Animal Shelter",
            description: "Rescuing and rehabilitating abandoned and abused animals",
            members: 65,
            address: "789 Furry Friends Lane, City 10009",
            phone: "5656565656",
            email: "info@pawsandclaws.org",
            needs: "Pet Food, Blankets, Toys, Medical Supplies"
        },
        {
            id: 2,
            name: "Wildlife Protection Society",
            type: "Wildlife Conservation",
            description: "Protecting endangered species and their habitats",
            members: 90,
            address: "321 Conservation Road, City 10010",
            phone: "3434343434",
            email: "contact@wildlifeprotection.org",
            needs: "Binoculars, Trail Cameras, Field Guides"
        }
    ],
    environment: [
        {
            id: 1,
            name: "Green Earth Initiative",
            type: "Environmental NGO",
            description: "Promoting sustainability and environmental conservation",
            members: 150,
            address: "654 Eco Avenue, City 10011",
            phone: "4545454545",
            email: "info@greenearth.org",
            needs: "Recycling Bins, Gardening Tools, Educational Materials"
        },
        {
            id: 2,
            name: "Ocean Guardians",
            type: "Marine Conservation",
            description: "Protecting marine ecosystems and reducing ocean pollution",
            members: 110,
            address: "987 Coastal Highway, City 10012",
            phone: "1212121212",
            email: "contact@oceanguardians.org",
            needs: "Beach Cleanup Supplies, Water Testing Kits, Educational Materials"
        }
    ]
};

// Current selected category
let currentCategory = '';

// Load organizations from localStorage on page load
function loadOrganizationsFromStorage() {
    const storedOrgs = localStorage.getItem('registeredCharities');
    if (storedOrgs) {
        const parsedOrgs = JSON.parse(storedOrgs);
        
        // Merge stored organizations with default ones
        for (const category in parsedOrgs) {
            if (organizations[category]) {
                organizations[category] = [...organizations[category], ...parsedOrgs[category]];
            } else {
                organizations[category] = parsedOrgs[category];
            }
        }
    }
}

// Save organizations to localStorage
function saveOrganizationsToStorage() {
    localStorage.setItem('registeredCharities', JSON.stringify(organizations));
}

// User management functions
function registerUser(name, email, phone, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('User with this email already exists!');
        return false;
    }
    
    // Add new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        password,
        donations: []
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login after registration
    loginUser(email, password);
    return true;
}

function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateUIForLoggedInUser(user);
        closeLoginModal();
        closeRegisterModal();
        return true;
    } else {
        alert('Invalid email or password!');
        return false;
    }
}

function logoutUser() {
    localStorage.removeItem('currentUser');
    updateUIForLoggedOutUser();
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
}

function updateUIForLoggedInUser(user) {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const userProfile = document.getElementById('userProfile');
    const userName = document.getElementById('userName');
    
    if (user) {
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        userProfile.style.display = 'flex';
        userName.textContent = user.name;
    }
}

function updateUIForLoggedOutUser() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const userProfile = document.getElementById('userProfile');
    
    loginBtn.style.display = 'block';
    registerBtn.style.display = 'block';
    userProfile.style.display = 'none';
}

// Open organization selection modal
function openModal(category) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        alert('Please login or register first to make a donation.');
        openLoginModal();
        return;
    }
    
    currentCategory = category;
    const modal = document.getElementById('orgModal');
    const orgGrid = document.getElementById('orgGrid');
    
    // Clear previous content
    orgGrid.innerHTML = '';
    
    // Add organizations for the selected category
    if (organizations[category]) {
        organizations[category].forEach(org => {
            const orgCard = document.createElement('div');
            orgCard.className = 'org-card';
            orgCard.innerHTML = `
                <h3>${org.name}</h3>
                <p>${org.type}</p>
                <p>${org.members} members</p>
            `;
            orgCard.addEventListener('click', () => showOrganizationDetails(org));
            orgGrid.appendChild(orgCard);
        });
    }
    
    // Show the modal
    modal.style.display = 'flex';
}

// Close organization selection modal
function closeModal() {
    document.getElementById('orgModal').style.display = 'none';
}

// Handle donation form submission
function handleDonationSubmit(org) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        alert('Please login to make a donation.');
        return;
    }
    
    // Get form values
    const donationType = document.getElementById('donationType').value;
    const quantity = document.getElementById('quantity').value;
    const people = document.getElementById('people').value;
    const deliveryDate = document.getElementById('deliveryDate').value;
    const message = document.getElementById('message').value;
    
    // Generate a random tracking ID
    const trackingId = 'CS-' + Math.floor(100000 + Math.random() * 900000);
    
    // Create donation details object
    const donationDetails = {
        id: trackingId,
        items: donationType,
        quantity: quantity + ' units',
        people: people + ' people',
        organization: org.name,
        address: org.address,
        trackingId: trackingId,
        deliveryDate: deliveryDate,
        donorName: currentUser.name,
        donorEmail: currentUser.email,
        donorPhone: currentUser.phone,
        status: 'processing',
        timestamp: new Date().toISOString()
    };
    
    // Save donation to user's donation history
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex].donations.push(donationDetails);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Update current user
        const updatedUser = users[userIndex];
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
    
    // Show success message
    alert('Thank you for your donation! Your tracking ID is: ' + trackingId);
    
    // Close modals
    closeDetailModal();
    closeModal();
    
    // Start tracking
    trackDonation(donationDetails);
}

// Show organization details
function showOrganizationDetails(org) {
    const orgDetailModal = document.getElementById('orgDetailModal');
    const orgDetails = document.getElementById('orgDetails');
    
    // Create organization details content
    orgDetails.innerHTML = `
        <h2>${org.name}</h2>
        <p>${org.description}</p>
        
        <div class="org-info">
            <h3>Organization Details</h3>
            <div class="org-detail-item">
                <i class="fas fa-users"></i>
                <div>
                    <h4>Members</h4>
                    <p>${org.members} people</p>
                </div>
            </div>
            <div class="org-detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <h4>Address</h4>
                    <p>${org.address}</p>
                </div>
            </div>
            <div class="org-detail-item">
                <i class="fas fa-phone"></i>
                <div>
                    <h4>Phone</h4>
                    <p>${org.phone}</p>
                </div>
            </div>
            <div class="org-detail-item">
                <i class="fas fa-envelope"></i>
                <div>
                    <h4>Email</h4>
                    <p>${org.email}</p>
                </div>
            </div>
            <div class="org-detail-item">
                <i class="fas fa-hand-holding-heart"></i>
                <div>
                    <h4>Current Needs</h4>
                    <p>${org.needs}</p>
                </div>
            </div>
        </div>
        
        <div class="donation-form">
            <h3 class="form-title">Make a Donation</h3>
            <form id="donationForm">
                <div class="form-group">
                    <label for="donationType">Donation Type</label>
                    <select id="donationType" required>
                        <option value="">Select donation type</option>
                        ${org.needs.split(', ').map(need => `<option value="${need}">${need}</option>`).join('')}
                    </select>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="quantity">Quantity</label>
                        <input type="number" id="quantity" placeholder="e.g., 50" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="people">Number of People</label>
                        <input type="number" id="people" placeholder="e.g., 25" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="deliveryDate">Preferred Delivery Date/Time</label>
                    <input type="datetime-local" id="deliveryDate" required>
                </div>
                
                <div class="form-group">
                    <label for="message">Message (Optional)</label>
                    <textarea id="message" placeholder="Any special instructions or notes..." rows="3"></textarea>
                </div>
                
                <button type="submit" class="btn btn-submit">Submit Donation</button>
            </form>
        </div>
    `;
    
    // Add form submission handler
    document.getElementById('donationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleDonationSubmit(org);
    });
    
    // Hide organization selection modal and show details modal
    closeModal();
    orgDetailModal.style.display = 'flex';
}

// Close organization details modal
function closeDetailModal() {
    document.getElementById('orgDetailModal').style.display = 'none';
}

// Open login modal
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Close login modal
function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Open register modal
function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'flex';
}

// Close register modal
function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
}

// Open charity registration modal
function openCharityModal() {
    document.getElementById('charityModal').style.display = 'flex';
}

// Close charity registration modal
function closeCharityModal() {
    document.getElementById('charityModal').style.display = 'none';
    // Reset form steps
    resetFormSteps();
}

// Close success modal
function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
    closeCharityModal();
}

// Track donation function
function trackDonation(donationDetails) {
    // Store donation details in sessionStorage
    sessionStorage.setItem('lastDonation', JSON.stringify(donationDetails));
    
    // Show the track donation link in header
    const trackLink = document.getElementById('trackDonationLink');
    if (trackLink) {
        trackLink.style.display = 'block';
    }
    
    // Open tracking modal
    openTrackingModal(donationDetails);
}

// Handle track donation
function handleTrackDonation() {
    // Check if we have a recent donation in session storage
    const lastDonation = sessionStorage.getItem('lastDonation');
    if (lastDonation) {
        openTrackingModal(JSON.parse(lastDonation));
    } else {
        // If no recent donation, check user's donation history
        const currentUser = getCurrentUser();
        if (currentUser && currentUser.donations && currentUser.donations.length > 0) {
            // Show the most recent donation
            const recentDonation = currentUser.donations[currentUser.donations.length - 1];
            openTrackingModal(recentDonation);
        } else {
            // If no donations, prompt for tracking ID
            const trackingId = prompt('Please enter your tracking ID:');
            if (trackingId) {
                // In a real app, you would fetch donation details from your backend
                alert('Fetching details for tracking ID: ' + trackingId);
                // For demo, use mock data
                const currentUser = getCurrentUser();
                openTrackingModal({
                    items: 'Rice, Vegetables',
                    quantity: '50 kg',
                    people: '25 people',
                    organization: 'Hope Shelter Home',
                    address: '1234 Compassion Street, Downtown, City 10001',
                    trackingId: trackingId,
                    deliveryDate: new Date(Date.now() + 3600000).toISOString(),
                    donorName: currentUser ? currentUser.name : 'Not provided',
                    donorEmail: currentUser ? currentUser.email : 'Not provided',
                    donorPhone: currentUser ? currentUser.phone : 'Not provided'
                });
            }
        }
    }
}

// Open tracking modal
function openTrackingModal(donationDetails) {
    const modal = document.getElementById('trackingModal');
    
    // If donation details provided, update the modal
    if (donationDetails) {
        const trackItems = document.getElementById('trackItems');
        const trackQuantity = document.getElementById('trackQuantity');
        const trackPeople = document.getElementById('trackPeople');
        const trackOrg = document.getElementById('trackOrg');
        const trackAddress = document.getElementById('trackAddress');
        const trackingNumber = document.getElementById('trackingNumber');
        const trackDonorName = document.getElementById('trackDonorName');
        const trackDonorEmail = document.getElementById('trackDonorEmail');
        const trackDonorPhone = document.getElementById('trackDonorPhone');
        
        if (trackItems) trackItems.textContent = donationDetails.items;
        if (trackQuantity) trackQuantity.textContent = donationDetails.quantity;
        if (trackPeople) trackPeople.textContent = donationDetails.people;
        if (trackOrg) trackOrg.textContent = donationDetails.organization;
        if (trackAddress) trackAddress.textContent = donationDetails.address;
        if (trackingNumber) trackingNumber.textContent = donationDetails.trackingId;
        if (trackDonorName) trackDonorName.textContent = donationDetails.donorName || 'Not provided';
        if (trackDonorEmail) trackDonorEmail.textContent = donationDetails.donorEmail || 'Not provided';
        if (trackDonorPhone) trackDonorPhone.textContent = donationDetails.donorPhone || 'Not provided';
        
        // Generate timeline based on delivery date
        generateDeliveryTimeline(donationDetails.deliveryDate);
    }
    
    // Show the modal
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Generate delivery timeline
function generateDeliveryTimeline(deliveryDate) {
    if (!deliveryDate) return;
    
    const selectedDate = new Date(deliveryDate);
    const now = new Date();
    
    // Calculate timeline events
    const processingTime = new Date(now.getTime() + 30 * 60000);
    const driverAssignedTime = new Date(processingTime.getTime() + 35 * 60000);
    const pickupTime = new Date(driverAssignedTime.getTime() + 40 * 60000);
    const onWayTime = new Date(pickupTime.getTime() + 15 * 60000);
    const deliveryTime = selectedDate;
    
    // Format times
    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
    };
    
    // Calculate ETA
    const timeDiff = deliveryTime.getTime() - now.getTime();
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    
    let etaText;
    if (hoursDiff > 0) {
        etaText = `${hoursDiff} hours ${minutesDiff} minutes`;
    } else if (minutesDiff > 0) {
        etaText = `${minutesDiff} minutes`;
    } else {
        etaText = "Delivery in progress";
    }
    
    // Update ETA display
    const etaValue = document.getElementById('etaValue');
    if (etaValue) {
        etaValue.textContent = etaText;
    }
    
    // Update timeline
    const timeline = document.querySelector('.tracking-timeline');
    if (timeline) {
        timeline.innerHTML = `
            <div class="timeline-line"></div>
            
            <div class="timeline-item completed">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-time">${formatTime(processingTime)}</div>
                    <div class="timeline-text">Donation received and processed</div>
                </div>
            </div>
            
            <div class="timeline-item completed">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-time">${formatTime(driverAssignedTime)}</div>
                    <div class="timeline-text">Driver assigned and on the way to pickup location</div>
                </div>
            </div>
            
            <div class="timeline-item completed">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-time">${formatTime(pickupTime)}</div>
                    <div class="timeline-text">Items picked up and verified</div>
                </div>
            </div>
            
            <div class="timeline-item active">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-time">${formatTime(onWayTime)}</div>
                    <div class="timeline-text">On the way to destination</div>
                </div>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-time">${formatTime(deliveryTime)}</div>
                    <div class="timeline-text">Expected delivery at organization</div>
                </div>
            </div>
        `;
    }
}

// Close tracking modal
function closeTrackingModal() {
    const modal = document.getElementById('trackingModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Form navigation functions
function nextStep(currentStep) {
    if (validateStep(currentStep)) {
        const currentStepEl = document.getElementById(`formStep${currentStep}`);
        const currentStepIndicator = document.getElementById(`step${currentStep}`);
        const nextStepEl = document.getElementById(`formStep${currentStep + 1}`);
        const nextStepIndicator = document.getElementById(`step${currentStep + 1}`);
        
        if (currentStepEl) currentStepEl.classList.remove('active');
        if (currentStepIndicator) currentStepIndicator.classList.remove('active');
        if (nextStepEl) nextStepEl.classList.add('active');
        if (nextStepIndicator) nextStepIndicator.classList.add('active');
    }
}

function prevStep(currentStep) {
    const currentStepEl = document.getElementById(`formStep${currentStep}`);
    const currentStepIndicator = document.getElementById(`step${currentStep}`);
    const prevStepEl = document.getElementById(`formStep${currentStep - 1}`);
    const prevStepIndicator = document.getElementById(`step${currentStep - 1}`);
    
    if (currentStepEl) currentStepEl.classList.remove('active');
    if (currentStepIndicator) currentStepIndicator.classList.remove('active');
    if (prevStepEl) prevStepEl.classList.add('active');
    if (prevStepIndicator) prevStepIndicator.classList.add('active');
}

function validateStep(step) {
    if (step === 1) {
        const orgName = document.getElementById('orgName');
        const orgType = document.getElementById('orgType');
        const orgDescription = document.getElementById('orgDescription');
        
        if (!orgName || !orgType || !orgDescription || 
            !orgName.value || !orgType.value || !orgDescription.value) {
            alert('Please fill in all required fields.');
            return false;
        }
    } else if (step === 2) {
        const orgAddress = document.getElementById('orgAddress');
        const orgCity = document.getElementById('orgCity');
        const orgCountry = document.getElementById('orgCountry');
        const orgPhone = document.getElementById('orgPhone');
        const orgEmail = document.getElementById('orgEmail');
        
        if (!orgAddress || !orgCity || !orgCountry || !orgPhone || !orgEmail ||
            !orgAddress.value || !orgCity.value || !orgCountry.value || 
            !orgPhone.value || !orgEmail.value) {
            alert('Please fill in all required fields.');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(orgEmail.value)) {
            alert('Please enter a valid email address.');
            return false;
        }
    }
    
    return true;
}

function resetFormSteps() {
    // Reset to step 1
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    const firstStep = document.getElementById('formStep1');
    if (firstStep) firstStep.classList.add('active');
    
    // Reset step indicators
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    const firstIndicator = document.getElementById('step1');
    if (firstIndicator) firstIndicator.classList.add('active');
    
    // Reset form
    const form = document.getElementById('charityRegistrationForm');
    if (form) form.reset();
}

// Handle charity registration submission
function handleCharityRegistrationSubmit(e) {
    e.preventDefault();
    
    // Validate step 3
    const services = document.querySelectorAll('input[name="services"]:checked');
    const orgNeeds = document.getElementById('orgNeeds');
    const orgCapacity = document.getElementById('orgCapacity');
    
    if (services.length === 0 || !orgNeeds || !orgCapacity || 
        !orgNeeds.value || !orgCapacity.value) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Get all form data
    const orgName = document.getElementById('orgName').value;
    const orgType = document.getElementById('orgType').value;
    const orgDescription = document.getElementById('orgDescription').value;
    const orgAddress = document.getElementById('orgAddress').value;
    const orgCity = document.getElementById('orgCity').value;
    const orgCountry = document.getElementById('orgCountry').value;
    const orgPhone = document.getElementById('orgPhone').value;
    const orgEmail = document.getElementById('orgEmail').value;
    const orgWebsite = document.getElementById('orgWebsite').value;
    const needs = orgNeeds.value;
    const capacity = orgCapacity.value;
    
    // Create new organization object
    const newOrg = {
        id: Date.now(), // Use timestamp as unique ID
        name: orgName,
        type: orgType,
        description: orgDescription,
        members: parseInt(capacity),
        address: `${orgAddress}, ${orgCity}, ${orgCountry}`,
        phone: orgPhone,
        email: orgEmail,
        website: orgWebsite,
        needs: needs,
        registered: new Date().toISOString()
    };
    
    // Add organization to the appropriate categories based on selected services
    services.forEach(service => {
        const category = service.value;
        // Fix category names to match the organization structure
        let actualCategory = category;
        if (category === 'clothing') actualCategory = 'clothes';
        if (category === 'animal_welfare') actualCategory = 'animal';
        
        if (!organizations[actualCategory]) {
            organizations[actualCategory] = [];
        }
        organizations[actualCategory].push(newOrg);
    });
    
    // Save to localStorage
    saveOrganizationsToStorage();
    
    // Show success message
    alert('Your charity has been registered successfully! It will now appear in the relevant donation categories.');
    
    // Show success modal
    closeCharityModal();
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.style.display = 'flex';
    }
}

// Handle user registration
function handleUserRegistration(e) {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    if (registerUser(name, email, phone, password)) {
        alert('Registration successful! Welcome to CareShare.');
    }
}

// Handle user login
function handleUserLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    loginUser(email, password);
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const orgModal = document.getElementById('orgModal');
    const orgDetailModal = document.getElementById('orgDetailModal');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const charityModal = document.getElementById('charityModal');
    const successModal = document.getElementById('successModal');
    const trackingModal = document.getElementById('trackingModal');
    
    if (event.target === orgModal) closeModal();
    if (event.target === orgDetailModal) closeDetailModal();
    if (event.target === loginModal) closeLoginModal();
    if (event.target === registerModal) closeRegisterModal();
    if (event.target === charityModal) closeCharityModal();
    if (event.target === successModal) closeSuccessModal();
    if (event.target === trackingModal) closeTrackingModal();
});

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load organizations from localStorage
    loadOrganizationsFromStorage();
    
    // Check if user is already logged in
    const currentUser = getCurrentUser();
    if (currentUser) {
        updateUIForLoggedInUser(currentUser);
    }
    
    // Login button
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', openLoginModal);
    }

    // Register button
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', openRegisterModal);
    }

    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logoutUser);
    }

    // Charity registration button
    const charityRegisterBtn = document.getElementById('charityRegisterBtn');
    if (charityRegisterBtn) {
        charityRegisterBtn.addEventListener('click', openCharityModal);
    }

    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleUserLogin);
    }

    // Registration form submission
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleUserRegistration);
    }

    // Charity registration form submission
    const charityRegistrationForm = document.getElementById('charityRegistrationForm');
    if (charityRegistrationForm) {
        charityRegistrationForm.addEventListener('submit', handleCharityRegistrationSubmit);
    }

    // Register link in login modal
    const registerLink = document.getElementById('registerLink');
    if (registerLink) {
        registerLink.addEventListener('click', function(e) {
            e.preventDefault();
            closeLoginModal();
            openRegisterModal();
        });
    }
    
    // Login link in register modal
    const loginLink = document.getElementById('loginLink');
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            closeRegisterModal();
            openLoginModal();
        });
    }
    
    // Track donation link
    const trackDonationLink = document.getElementById('trackDonationLink');
    if (trackDonationLink) {
        trackDonationLink.addEventListener('click', function(e) {
            e.preventDefault();
            handleTrackDonation();
        });
    }
    
    // Refresh tracking button
    const refreshTrackingBtn = document.getElementById('refreshTracking');
    if (refreshTrackingBtn) {
        refreshTrackingBtn.addEventListener('click', function() {
            alert('Tracking information refreshed!');
            const lastDonation = sessionStorage.getItem('lastDonation');
            if (lastDonation) {
                generateDeliveryTimeline(JSON.parse(lastDonation).deliveryDate);
            }
        });
    }
});