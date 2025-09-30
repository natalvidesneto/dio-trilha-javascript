async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/natalvidesneto/teste-portifolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

// https://raw.githubusercontent.com/natalvidesneto/teste-portifolio/main/data/profile.json