$(document).ready(function () {
  var set = true;

  $(".amount-item").on("click", function () {
    $(this).parent().children().removeClass("amount-item-active");
    $(this).addClass("amount-item-active");
    $(".how-much").removeClass("how-much-active");
    if ($(this).attr("id") == "custom-amount") {
      $(".how-much").toggleClass("how-much-active");
    }
  });

  $(".gift-btn").on("click", function () {
    $(this).toggleClass("gift-btn-active");
  });

  $(".memory-honor").on("click", function () {
    $(this).toggleClass("memory-honor-active");
  });

  $(".toggle").on("click", function () {
    $(this).toggleClass("toggle-active");
  });

  $("#filter-byCollege").on("click", function () {
    $(this).children("i").toggleClass("fa-angle-down fa-angle-up");
    $(".filter-dropdown").toggleClass("filter-dropdown-active");
  });

  $(".overflow-scroll").on("scroll", _.throttle(lazyLoad, 1000));

  function lazyLoad() {
    console.log("called");
    if (
      $(this).scrollTop() + $(this).innerHeight() + 24 >=
      $(this)[0].scrollHeight
    ) {
      $(".loadingcontent").remove();

      console.log(set);

      if (set) {
        set = !set;
        $(".overflow-scroll").append(
          '<div class="allocation-item"><div class="allocation-image" style="background-image: url(img/studyAbroad.jpg);"></div><div class="allocation-text"><div><strong>Study Abroad Fund</strong><p>For many students, their study abroad trip is one of the most transformational and eye-opening experiences of their college career. The University puts a strong emphasis on providing students with the opportunity to undertake these life-changing journeys, and it is our hope that we can provide this for all University students. Donations to the Study Abroad Fund will go directly to funding students study abroad experiences.</p></div><div class="alt-amount-gift"><div class="gift-btn">Gift: $250</div><span> or </span><div class="input-field"><i class="fas fa-dollar-sign"></i><input type="number" placeholder="Enter Amount" /></div></div></div></div><div class="allocation-item"><div class="allocation-image"style="background-image: url(img/lake.jpg)"></div><div class="allocation-text"><div><strong>Raquette Lake - Facilities Rennovation</strong><p>Some of students most memorable University experiences take place at our outdoor education facilities at Raquette Lake, which is located in the heart of the Adirondack Mountains. This location is the only National Historic Landmark in the University system, and its facilities offer unique and exciting experiences for all University students.</p></div><div class="alt-amount-gift"><div class="gift-btn">Gift: $250</div><span> or </span><div class="input-field"><i class="fas fa-dollar-sign"></i><input type="number" placeholder="Enter Amount" /></div></div></div></div><div class="allocation-item"><div class="allocation-image"style="background-image: url(img/lynne.jpg)"></div><div class="allocation-text"><div><strong>Jane Doe Alumni House Capital Restoration Fund</strong><p>Started in 2009, the Alumni House Restoration Fund has been essential to the survival and success of the historic location. The Board of Directors has identified several priorities for capital projects, including a variety of restorations and upgrades.</p></div><div class="alt-amount-gift"><div class="gift-btn">Gift: $250</div><span> or </span><div class="input-field"><i class="fas fa-dollar-sign"></i><input type="number" placeholder="Enter Amount" /></div></div></div></div><div class="loadingcontent"><div class="spinner"></div></div>'
        );
      } else if (set === false) {
        set = !set;
        $(".overflow-scroll").append(
          '<div class="allocation-item"><div class="allocation-image" style="background-image: url(img/wrestling.png);"></div><div class="allocation-text"><div><strong>Wrestling Fund</strong><p>The wrestling team needs funds to give scholarships to hardworking athletes who need help. These scholarships will be used to offset tuition and food costs. They also are looking to upgrade their mat which is 5 years old.</p></div><div class="alt-amount-gift"><div class="gift-btn">Gift: $250</div><span> or </span><div class="input-field"><i class="fas fa-dollar-sign"></i><input type="number" placeholder="Enter Amount" /></div></div></div></div><div class="allocation-item"><div class="allocation-image"style="background-image: url(img/jones.png)"></div><div class="allocation-text"><div><strong>Professor Jones’s Scholarship</strong><p>This scholarship will honor the late Professor Jones’s legacy. The scholarship will go to first generation business administration students who would not be able to attend University without it.</p></div><div class="alt-amount-gift"><div class="gift-btn">Gift: $250</div><span> or </span><div class="input-field"><i class="fas fa-dollar-sign"></i><input type="number" placeholder="Enter Amount" /></div></div></div></div><div class="allocation-item"><div class="allocation-image"style="background-image: url(img/universityCup.webp)"></div><div class="allocation-text"><div><strong>The University Cup - Reunion Giving Competition</strong><p>Each year, alumni class groups with reunions in that year are entered into The University Cup, a friendly competition aimed at adding a little extra fun to a crucial source of funds for the school that benefit current University students. The class/group with the largest total reunion gift will be awarded the University Cup, and be crowned the winners for that year. No matter who wins the awards, the real winners are the current students.</p></div><div class="alt-amount-gift"><div class="gift-btn">Gift: $250</div><span> or </span><div class="input-field"><i class="fas fa-dollar-sign"></i><input type="number" placeholder="Enter Amount" /></div></div></div></div><div class="loadingcontent"><div class="spinner"></div></div>'
        );
      }
    }
  }
});
