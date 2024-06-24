const gifsPerPage = 5;
let currentPage = 1;

const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3h6dWoza3VwNGpsNjk0dTN6cng2bmc5czlxOXJlcWI3aDJrcmw3MiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/rrmf3fICPZWg1MMXOW/giphy.gif",
    "https://media.giphy.com/media/U8BMLOWpqJOBEbWqtS/giphy.gif?cid=790b76117xzuj3kup4jl694u3zrx6ng9s9q9reqb7h2krl72&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/DyQrKMpqkAhNHZ1iWe/giphy.gif?cid=82a1493bfell6y25qfqousr3tnljadlgbxhe4oyrmix86vjt&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/zJ8ldRaGLnHTa/giphy.gif?cid=82a1493bfell6y25qfqousr3tnljadlgbxhe4oyrmix86vjt&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/fUQ4rhUZJYiQsas6WD/giphy.gif?cid=82a1493buv6c5crh58wbc0397v9qs57idnu01dn22zvvlnwq&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/K1MmPRUOWfkmRAtwuR/giphy.gif?cid=82a1493buv6c5crh58wbc0397v9qs57idnu01dn22zvvlnwq&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/3oEjI53nBYOOEQgDcY/giphy.gif?cid=82a1493bq2ia4zici580yw60ngitja4k0enqf0sa7sqi06wj&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/VEy9Ru5Qni9dz44SDT/giphy.gif?cid=82a1493bq2ia4zici580yw60ngitja4k0enqf0sa7sqi06wj&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/UO5elnTqo4vSg/giphy.gif?cid=82a1493b1uu6as2jyoj116vn5jhu872xc7fxtqqojbclbhjl&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif?cid=82a1493bkoti6uacgb271xa0x3z3jldr0scir85rtn2zp8lc&ep=v1_gifs_trending&rid=giphy.gif&ct=g",
   
];

function showPage(page) {
    const start = (page - 1) * gifsPerPage;
    const end = start + gifsPerPage;
    const gifsToShow = gifs.slice(start, end);

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    gifsToShow.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = end >= gifs.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * gifsPerPage < gifs.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);