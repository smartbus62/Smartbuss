// 1. استيراد Firebase SDK (تعديل)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"; // لاستعمال Firestore
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js"; // إذا كنت تحتاج للتوثيق

// 2. إعداد Firebase الخاص بمشروعك
const firebaseConfig = {
  apiKey: "AIzaSyCmzRBEKcBsevj9Pr6Q30VwgOsGGd7ziQA",
  authDomain: "smart-buss-9b145.firebaseapp.com",
  projectId: "smart-buss-9b145",
  storageBucket: "smart-buss-9b145.firebasestorage.app",
  messagingSenderId: "339752655177",
  appId: "1:339752655177:web:3f4109a7e19648e972a298",
  measurementId: "G-185KSQ1Y94"
};

// 3. تهيئة Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // لخاصية تحليلات Firebase

// 4. تهيئة Firestore و Authentication
const db = getFirestore(app);
const auth = getAuth(app);

// 5. دالة لحفظ موقع الطالب في Firestore
async function saveStudentLocation(studentName, location) {
  try {
    const docRef = await addDoc(collection(db, "students"), {
      name: studentName,
      location: location
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// مثال: حفظ بيانات الموقع عند تحديد موقع الطالب
const selectedLocation = { lat: 26.3260, lng: 43.9750 };  // يمكن تعديل هذا الموقع
saveStudentLocation("Student Name", selectedLocation);

// 6. هنا يمكن إضافة المزيد من الأكواد حسب الحاجة (مثل Firebase Authentication أو Firebase Messaging)