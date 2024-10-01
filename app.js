const countryListElement = document.getElementById('country-list');
const regionFilter = document.getElementById('region-filter');
const subregionFilter = document.getElementById('subregion-filter');
const searchInput = document.getElementById('search-input');
const populationFilter = document.getElementById('population-filter');
const areaFilter = document.getElementById('area-filter');

let countries = [];
let subregions = new Set(); // Para armazenar sub-regiões únicas

// Função para buscar países da API
const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    countries = await response.json();
    return countries;
};

// Função para exibir a lista de países
const displayCountries = (countriesToDisplay) => {
    countryListElement.innerHTML = '';
    countriesToDisplay.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.className = 'country-card';
        countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="${country.name.common}" loading="lazy">
            <h3><a href="country-detail.html?name=${country.name.common}">${country.name.common}</a></h3>
            <p>Capital: ${country.capital ? country.capital : 'N/A'}</p>
            <p>Região: ${country.region}</p>
            <p>População: ${country.population.toLocaleString()}</p>
            <p>Área: ${country.area ? country.area.toLocaleString() + ' km²' : 'N/A'}</p>
        `;
        countryListElement.appendChild(countryCard);
    });
};

// Função para atualizar as sub-regiões com base na seleção de região
const updateSubregions = () => {
    if (subregionFilter.value !== "") return; // Evita limpar a sub-região se já houver uma selecionada.
    subregionFilter.innerHTML = '<option value="">Todas as Sub-regiões</option>';
    subregions.forEach(subregion => {
        const option = document.createElement('option');
        option.value = subregion;
        option.textContent = subregion;
        subregionFilter.appendChild(option);
    });
};

// Função de filtragem
const filterCountries = () => {
    const region = regionFilter.value;
    const subregion = subregionFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    const population = populationFilter.value;
    const area = areaFilter.value;

    let filteredCountries = countries;

    // Filtra por região
    if (region) {
        filteredCountries = filteredCountries.filter(country => country.region === region);
        subregions.clear();
        filteredCountries.forEach(country => {
            if (country.subregion) subregions.add(country.subregion);
        });
        updateSubregions();
    }

    // Filtra por sub-região
    if (subregion) {
        filteredCountries = filteredCountries.filter(country => country.subregion === subregion);
    }

    // Filtra por nome ou capital
    if (searchTerm) {
        filteredCountries = filteredCountries.filter(country =>
            country.name.common.toLowerCase().includes(searchTerm) ||
            (country.capital && country.capital[0].toLowerCase().includes(searchTerm)) ||
            (country.subregion && country.subregion.toLowerCase().includes(searchTerm))
        );
    }

    // Filtra por população
    if (population) {
        filteredCountries = filteredCountries.filter(country => {
            if (population === '<1M') return country.population < 1000000;
            if (population === '1M-10M') return country.population >= 1000000 && country.population < 10000000;
            if (population === '10M-100M') return country.population >= 10000000 && country.population < 100000000;
            if (population === '>100M') return country.population > 100000000;
            return true;
        });
    }

    // Filtra por área
    if (area) {
        filteredCountries = filteredCountries.filter(country => {
            if (area === '<100km²') return country.area < 100;
            if (area === '100-1000km²') return country.area >= 100 && country.area < 1000;
            if (area === '1000-10000km²') return country.area >= 1000 && country.area < 10000;
            if (area === '>10000km²') return country.area > 10000;
            return true;
        });
    }

    displayCountries(filteredCountries);
};

// Inicializa a aplicação e carrega os países
const init = async () => {
    await fetchCountries();
    displayCountries(countries);

    // Adiciona eventos para cada filtro
    regionFilter.addEventListener('change', filterCountries);
    subregionFilter.addEventListener('change', filterCountries);
    searchInput.addEventListener('input', filterCountries);
    populationFilter.addEventListener('change', filterCountries);
    areaFilter.addEventListener('change', filterCountries);
};

// Inicia a aplicação
init();
