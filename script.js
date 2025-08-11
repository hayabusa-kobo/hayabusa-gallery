        // タブ切り替え機能
        const tabButtons = document.querySelectorAll('.tab-button');
        const galleries = document.querySelectorAll('.gallery');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // アクティブなタブとギャラリーを非表示
                document.querySelector('.tab-button.active').classList.remove('active');
                document.querySelector('.gallery.active').classList.remove('active');

                // クリックされたタブをアクティブに
                button.classList.add('active');
                const targetTab = button.getAttribute('data-tab');
                document.getElementById(targetTab).classList.add('active');
            });
        });

        // 画像モーダル機能
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        const closeBtn = document.querySelector('.close');
        const images = document.querySelectorAll('.gallery-item img');

        images.forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = 'block';
                modalImg.src = img.src;
                modalImg.alt = img.alt;
            });
        });

        // モーダルを閉じる
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // ESCキーでモーダルを閉じる
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
            }
        });