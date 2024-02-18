import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXQQu_EHt4ov55yini3q1huXTPLKGzqOU",
  authDomain: "logingenerator-8d229.firebaseapp.com",
  databaseURL: "https://logingenerator-8d229-default-rtdb.firebaseio.com",
  projectId: "logingenerator-8d229",
  storageBucket: "logingenerator-8d229.appspot.com",
  messagingSenderId: "24678832465",
  appId: "1:24678832465:web:c388a5a7087890ea08db70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

async function fetchReports() {
  const reports = [];
  try {
    const querySnapshot = await getDocs(collection(db, "reports"));
    querySnapshot.forEach((doc) => {
      const report = doc.data();
      reports.push(report);
    });
    return reports; // Return the reports array after fetching
  } catch (error) {
    console.error("Couldn't load data", error);
    return []; // Return an empty array if there's an error
  }
}

async function showReports(reports) {
  // Populate the webpage with the fetched data
  const messageGrid = document.querySelector(".message-grid");
  const messageTemplate = document.getElementById("messageTemplate");
  await reports.sort((a, b) => b.count - a.count);
  // const reports = await fetchReports();
  reports.forEach((report) => {
    console.log(report.title, "  ", report.report, "   ", report.count);
  });
  reports.forEach((report) => {
    let clone = messageTemplate.content.cloneNode(true);
    clone.querySelector(".message-title").textContent = report.title;
    clone.querySelector(".message-content").textContent = report.report;
    clone.querySelector(".votes").textContent = report.count;
    // clone.querySelector(".attachment-button").textContent =
    //   report.attachments.length;
    messageGrid.appendChild(clone);
  });
  document.body.appendChild(messageGrid);
}

document.addEventListener("DOMContentLoaded", async function () {
  // Fetch reports data
  const reports = await fetchReports();
  reports.forEach((report) => {
    console.log(report.title, "  ", report.report, "   ", report.count);
  });
  await showReports(reports);
});

