const searchInput = document.querySelector('.search-bar');
const searchDropdown = document.querySelector('.search-dropdown');

// Xử lý khi nhập text
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim();
    
    if (searchTerm === '') {
        hideDropdown();
        return;
    }
    
    showDropdown(searchTerm);
});

// Xử lý khi click vào search bar
searchInput.addEventListener('click', function() {
    const searchTerm = this.value.trim();
    if (searchTerm !== '') {
        showDropdown(searchTerm);
    }
});

// Hàm hiển thị dropdown
function showDropdown(searchTerm) {
    searchInput.classList.add('typing');
    searchDropdown.style.display = 'block';
    searchDropdown.innerHTML = `
        <div class="dropdown-item">
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>
            <span>${searchTerm}</span>
        </div>
    `;
}

// Hàm ẩn dropdown
function hideDropdown() {
    searchDropdown.style.display = 'none';
    searchInput.classList.remove('typing');
}

// Xử lý click ra ngoài
document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        hideDropdown();
    }
});

// Xử lý khi nhấn ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hideDropdown();
    }
});