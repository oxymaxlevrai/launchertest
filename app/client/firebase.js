const firebaseConfig = {
    apiKey: "AIzaSyBexyNPogru8Jc7sq4FoZBrFEckPrmBS8c",
    authDomain: "eronixmc.firebaseapp.com",
    databaseURL: "https://eronixmc-default-rtdb.firebaseio.com",
    projectId: "eronixmc",
    storageBucket: "eronixmc.appspot.com",
    messagingSenderId: "469680302705",
    appId: "1:469680302705:web:b2475a19ba090001e109d0",
    measurementId: "G-6Z685TD6MN"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
        const fetchUsers = db.ref(`/users/${uid}`);
        fetchUsers.on('value', function (snapshot) {
            const users = snapshot.val();
            const pdpMC = `https://minotar.net/helm/${users.username}/40.png`;
            document.getElementById("pdpMC").src = pdpMC;
            setInterval(() => {
                localStorage.setItem('username', users.username);
                localStorage.setItem('token', "lkTYDm4WmKhXCVBUAbTkJbn2s9J2");
            }, 1);
        });
        document.getElementById("online").style.background = "#00ff00";
    } else {
        document.getElementById("online").style.background = "#ff0000";
    }
});

async function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    firebase.auth().signOut().then(() => {
        window.location = "./login.html";
    })
}

const fetchChat = db.ref("/mails");
fetchChat.on("child_added", function (snapshot) {
    const mail = snapshot.val();
    const msg = `<div class="mailApp"><div class="mail-header"><img src="${mail.authorimg}"><ul><span>${mail.author}</span><p>À :<span>@Tous les membres</span></p></ul></div><div class="mail-content"><h1>${mail.title}</h1><p>${mail.description}</p></div></div>`;
    const mailSnop = document.getElementById("mailAuto");
    if(mailSnop) {mailSnop.innerHTML += msg;};
});

const fetchNews = db.ref("/launcher");
fetchNews.on("child_added", function (snapshot) {
    const news = snapshot.val();
    // const msg = `<button onclick="location.href='${news.url}'" id="beta">`;
    const msg = `<div class="wel-col1"><button  onclick="beta()"><img src="${news.img}"><div class="wel-desc"><h1>${news.title}</h1></div></button></div>`;

    const newsSnop = document.getElementById("newsAuto");
    if(newsSnop) {newsSnop.innerHTML += msg;};

    const fetchIframe = db.ref(`/launcher/${news.id}/`);
    fetchIframe.on("value", function (snapshot) {
        const link = snapshot.val();

        const linkSnop = document.getElementById("charlie");
        if(linkSnop) {linkSnop.src = link.url;};
    });
});