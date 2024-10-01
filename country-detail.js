const countryDetailElement = document.getElementById('country-detail');

const fetchCountryDetails = async (countryName) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar detalhes do país');
        }
        const country = await response.json();
        return country[0]; // Retorna o primeiro resultado
    } catch (error) {
        console.error(error);
        countryDetailElement.innerHTML = '<p>Erro ao carregar os detalhes do país.</p>';
    }
};

const displayCountryDetails = (country) => {
    countryDetailElement.innerHTML = `
        <h1>${country.name.common} (${country.cca3})</h1>
        <table class="country-info">
            <tr>
                <th>Bandeira</th>
                <td><img src="${country.flags.svg}" alt="${country.name.common}" /></td>
            </tr>
            <tr>
                <th>Capital</th>
                <td>${country.capital ? country.capital : 'N/A'}</td>
            </tr>
            <tr>
                <th>Região</th>
                <td>${country.region}</td>
            </tr>
            <tr>
                <th>Sub-região</th>
                <td>${country.subregion ? country.subregion : 'N/A'}</td>
            </tr>
            <tr>
                <th>População</th>
                <td>${country.population.toLocaleString()}</td>
            </tr>
            <tr>
                <th>Área</th>
                <td>${country.area ? country.area.toLocaleString() + ' km²' : 'N/A'}</td>
            </tr>
            <tr>
                <th>Idiomas</th>
                <td>${country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</td>
            </tr>
            <tr>
                <th>Moedas</th>
                <td>${country.currencies ? Object.values(country.currencies).map(curr => curr.name).join(', ') : 'N/A'}</td>
            </tr>
            <tr>
                <th>Fuso Horário</th>
                <td>${country.timezones ? country.timezones.join(', ') : 'N/A'}</td>
            </tr>
            <tr>
                <th>Domínio de Internet</th>
                <td>${country.tld ? country.tld.join(', ') : 'N/A'}</td>
            </tr>
        </table>
    `;
};

const init = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const countryName = urlParams.get('name');
    if (countryName) {
        const country = await fetchCountryDetails(countryName);
        if (country) {
            displayCountryDetails(country);
        }
    } else {
        countryDetailElement.innerHTML = '<p>Nome do país não fornecido.</p>';
    }
};

document.getElementById('back-button').addEventListener('click', () => {
    window.history.back();
});

init();
