(function() {
            // jednostavan JS: na klik kontakt linka pojavi se poruka
            const kontaktLink = document.getElementById('kontaktLink');
            const toast = document.getElementById('greetingToast');

            if (kontaktLink && toast) {
                kontaktLink.addEventListener('click', function(e) {
                    e.preventDefault();   // ne odlazi nikuda
                    
                    // prikaži tost
                    toast.classList.add('show');

                    // sakrij posle 2.8 sekundi
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 2800);

                    // opciono u konzoli ispisati podatke o projektima – po želji
                    console.log('📋 Godine projekata: 2023 (dok. film + knjiga), 2024 (festival + knjiga), 2025 (film + knjiga)');
                });
            }

            // dodatno: hover efekat na godinama prati projekte – nije potrebno više od css-a.
            // ali možemo dodati da se u tostu promeni tekst ako neko klikne drugde? ne, ovo je dovoljno.

            // opcioni mali efekat: nakon što se stranica učita, prikaži poruku "dobrodošli" na 2sec (ali ne previše napadno)
            // ali da ne bude nametljivo, iskoristićemo isti tost nakon 0.5s (prvi put)
            window.addEventListener('load', function() {
                setTimeout(() => {
                    toast.textContent = '✨ Projekti 2023–2025 ✨';
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                        // vratimo originalni tekst za kasnije
                        setTimeout(() => { toast.textContent = '👋 drugar (pisac/reditelj) pozdravlja!'; }, 400);
                    }, 2000);
                }, 600);
            });
        })();