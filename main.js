function changeActiveBox(nomor) {
    //console.log(nomor);
    document.querySelectorAll('.box').forEach(box => {
        box.classList.remove('bg-[#5CB26E]', 'h-[363px]', 'flex', 'justify-beetween');
        box.classList.add('bg-[#151F2C]', 'h-[300px]');
        box.querySelector('.deskripsi')?.remove();
        box.querySelector('.tombol')?.remove();
    });

    const ActiveBox = document.getElementById(`box-${nomor}`);
    ActiveBox.classList.remove('bg-[#151F2C]', 'h-[300px]');
    ActiveBox.classList.add('bg-[#5CB26E]', 'h-[363px]', 'flex', 'justify-beetween');

    const dsc = document.createElement('p');
    dsc.className = 'deskripsi text-[16px]';
    dsc.innerText = nomor === 1 ? "ini deskripsi 01" : nomor === 2 ? "All accommodation, food, and desination facilities included in our package are included in the listed  price" : "ini deskrpsi 03";
    ActiveBox.appendChild(dsc);

    const tmbl = document.createElement('div');
    tmbl.className = 'tombol flex gap-10 items-center';
    tmbl.innerHTML = ' <p>LEARN MORE</p> <i class="fa-solid fa-chevron-right"></i>';
    ActiveBox.appendChild(tmbl);
}

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3.5
            }
        }
    })
})

const trips = document.querySelectorAll("[data-trip");

function activeTrip(tripNumber) {
    trips.forEach((trip) => {
        const circle = trip.querySelector(".trip-circle");
        const innerCircle = trip.querySelector(".trip-circle div");
        const text = trip.querySelector(".trip-text");

        if (trip.getAttribute("data-trip") === tripNumber.toString()) {
            circle.classList.remove("bg-[#d9d9d9]");
            circle.classList.add("bg-[#5CB26E]");
            innerCircle.classList.remove("hidden");
            text.classList.remove("text-[#FFFFFF80]");
            text.classList.add("text-[#5CB26E]");
        } else {
            circle.classList.remove("bg-[#5CB26E]");
            circle.classList.add("bg-[#d9d9d9]");
            innerCircle.classList.add("hidden");
            text.classList.remove("text-[#5CB26E]");
            text.classList.add("text-[#FFFFFF80]");
        }
    })
}

trips.forEach((trip) => {
    trip.addEventListener("click", () => {
        activeTrip(trip.getAttribute("data-trip"));
    })
});

activeTrip("1");

const dayTrip = document.querySelectorAll(".days");
const listTrip = Array.from(dayTrip);
const tmblTrip = document.getElementById("tmblTrip");

listTrip.forEach((lt) => {
    lt.addEventListener("mouseover", () => {
        tmblTrip.classList.remove("top-[0px]","top-[125px]","top-[250px]","top-[375px]");
        tmblTrip.classList.add("flex");

        const index = listTrip.indexOf(lt);
        tmblTrip.classList.remove("hidden");
        if (index == 1) {
            tmblTrip.classList.add("top-[125px]");
        } else if (index == 2) {
            tmblTrip.classList.add("top-[250px]");

        } else if (index == 2) {
            tmblTrip.classList.add("top-[375px]");

        } else if (index == 2) {
            tmblTrip.classList.add("top-[0px]");

        }
    });

    lt.addEventListener("mouseout", () => {
        tmblTrip.classList.remove("flex");
        tmblTrip.classList.add("hidden");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuItems = document.querySelectorAll('.mobile-menu ul.menu li a');
    const socialIcons = document.querySelectorAll('.mobile-menu .social-icon');

    hamburgerIcon.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerIcon.innerHTML = mobileMenu.classList.contains('hidden') ? '<i class="fa-solid fa-bars"></i>' : '<i class="fa-solid fa-times"></i>';
    });

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(i => i.classList.remove('text-green-500'));
            item.classList.add('text-green-500');
        });
    });

    socialIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            socialIcons.forEach(i => i.classList.remove('text-green-500'));
            icon.classList.add('text-green-500');
        });
    });

    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const alamatInput = document.getElementById('Alamat');
    const nomerInput = document.getElementById('nomer');

    form.addEventListener('submit', function (event) {
        let valid = true;

        // Clear previous error messages
        document.querySelectorAll('.error-message').forEach(el => el.remove());

        // Check if name is in uppercase
        if (nameInput.value.charAt(0) !== nameInput.value.charAt(0).toUpperCase()) {
            const errorMessage = document.createElement('p');
            errorMessage.className = 'error-message text-red-500';
            errorMessage.innerText = '* huruf awal menggunakan huruf kapital';
            nameInput.after(errorMessage);
            valid = false;
        }

        // Check if all inputs are filled
        [nameInput, alamatInput, nomerInput].forEach(input => {
            if (input.value.trim() === '') {
                const errorMessage = document.createElement('p');
                errorMessage.className = 'error-message text-red-500';
                errorMessage.innerText = '*Silahkan isi terlebih dahulu';
                input.after(errorMessage);
                valid = false;
            }
        });

        if (!valid) {
            event.preventDefault();
        } else {
            // Clear inputs if form is valid
            nameInput.value = '';
            alamatInput.value = '';
            nomerInput.value = '';
        }
    });

    // Remove error message when name input is in uppercase
    nameInput.addEventListener('input', function () {
        if (nameInput.value.charAt(0) === nameInput.value.charAt(0).toUpperCase()) {
            document.querySelectorAll('.error-message').forEach(el => el.remove());
        }
    });
});