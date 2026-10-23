const pages=[["index","Home"],["experience","Experience"],["resume","Resume"],["blog","Blog"]];
const here=(location.pathname.split("/").pop()||"index").replace(".html","")||"index";
document.getElementById("side").innerHTML=`
<a href="index.html"><img class="ph" src="photo.jpg" alt="Portrait of Shereen Anand"></a>
<h1>Shereen Anand</h1><p class="role">Research Sciences Intern,<br>Microsoft Research</p>
<ul class="soc">
<li><i>📍</i>Bangalore, Karnataka, India</li>
<li><i>✉️</i><a href="mailto:shreenanand@gmail.com">Email</a></li>
<li><i>📚</i><a href="https://github.com/Shereen20">GitHub</a></li>
<li><i>💼</i><a href="https://www.linkedin.com/in/shereen-a-697036249/">LinkedIn</a></li>
<li><i>📊</i><a href="https://www.kaggle.com/shereenanand">Kaggle</a></li>
<li><i>🔬</i><a href="https://openreview.net/profile?id=%7EShereen_Anand2">OpenReview</a></li>
<li><i>🎓</i><a href="https://scholar.google.com/citations?view_op=list_works&amp;hl=en&amp;hl=en&amp;user=A95-9J4AAAAJ">Google Scholar</a></li>
</ul>
<nav aria-label="Pages">${pages.map(([h,l])=>`<a href="${h}.html"${h===here?' aria-current="page"':''}>${l}</a>`).join("")}</nav>`;
