document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById("reviewForm");
  const userNameInput = document.getElementById("userName");
  const siteSelect = document.getElementById("siteSelect");
  const userReviewInput = document.getElementById("userReview");
  const ratingSelect = document.getElementById("ratingSelect");
  const editIndexInput = document.getElementById("editIndex");
  const submitBtn = document.getElementById("submitBtn");
  const reviewsList = document.getElementById("reviewsList");

   let reviews = JSON.parse(localStorage.getItem("jordanSiteReviews")) || [];

   function getStars(rating) {
    return "⭐".repeat(parseInt(rating));
  }

   function renderReviews() {
    reviewsList.innerHTML = "";

    if (reviews.length === 0) {
      reviewsList.innerHTML = "<p style='color:#7f8c8d;'>لا توجد آراء مضافة بعد.</p>";
      return;
    }

    reviews.forEach((review, index) => {
      const item = document.createElement("div");
      item.className = "review-item";
      item.innerHTML = `
        <div class="review-header">
          <span class="review-user">${review.name}</span>
          <div class="review-actions">
            <button class="btn-edit" onclick="editReview(${index})">تعديل</button>
            <button class="btn-delete" onclick="deleteReview(${index})">حذف</button>
          </div>
        </div>
        <div class="review-site">الموقع: <strong>${review.site}</strong></div>
        <p style="margin: 8px 0; color: #444;">${review.text}</p>
        <div>${getStars(review.rating)}</div>
      `;
      reviewsList.appendChild(item);
    });
  }

   reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = userNameInput.value.trim();
    const site = siteSelect.value;
    const text = userReviewInput.value.trim();
    const rating = ratingSelect.value;
    const editIndex = parseInt(editIndexInput.value);

 if (editIndex === -1) {
       reviews.push({ name, site, text, rating });
    } else {
       reviews[editIndex] = { name, site, text, rating };
      editIndexInput.value = "-1";
      submitBtn.textContent = "إضافة رأي";
      submitBtn.style.backgroundColor = "#27ae60";
    }

    localStorage.setItem("jordanSiteReviews", JSON.stringify(reviews));
    reviewForm.reset();
    renderReviews();
  });

   window.editReview = function(index) {
    const item = reviews[index];
    userNameInput.value = item.name;
    siteSelect.value = item.site;
    userReviewInput.value = item.text;
    ratingSelect.value = item.rating;

    editIndexInput.value = index;
    submitBtn.textContent = "حفظ التعديل";
    submitBtn.style.backgroundColor = "#f39c12";
  };

   window.deleteReview = function(index) {
    if (confirm("هل تريد بالتأكيد حذف هذا الرأي؟")) {
      reviews.splice(index, 1);
      localStorage.setItem("jordanSiteReviews", JSON.stringify(reviews));
      renderReviews();
    }
  };

   renderReviews();
});