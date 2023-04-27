<template>
<div class="main">
<div class="thisos"><span>You can find the open source codes for this website on <a href="https://github.com/mishuw/mishu" target="_blank">GitHub.</a></span></div>
<div class="preloader">
  <span class="loaderText">better soon</span>
  <div class="loaders">
    <span></span>
    <span></span>
    <span></span>
</div>
</div>
<div class="min-h-screen max-w-screen-xl p-5 w-full px-[40px] mx-auto transition-all duration-300">
    <Navbar />
    <About />
    <Technologies />
    <button onclick="topper()" class="hover:bg-[#d1d1e0]/50 topperButton navigatorButtons">
        <i class="fa-regular fa-chevron-up"></i>
    </button>
<div class="modal-overlay discords">
  <div class="modal _discord">
    <button class="close-modal text-color">
        <span class="close-wrapper">
			<span class="close">
				<i class="fa-solid fa-x"></i>
			</span>
			<span class="text title eskeys">ESC</span>
		</span>
    </button>
  <div class="dc-bg pb-1 rounded-b-lg rounded-t-lg">
    <div>
        <div class="mb-3">
            <div class="banner" style="height:136px;width:340px;border-radius:2%;">
                <div class="mt-12 relative ml-4" style="padding-top:75px;">
                <img class="discord_user_img bg-[#EEE8ED]" draggable="false" width="95" src="" alt="mishu avatar">
                </div>
            </div>
            <div class="socialSec">
              <div class="socials">
                <a href="https://discord.com/users/906634054311481364"><i class="fa-brands fa-discord text-offline mr-2"></i></a>
                <a href="https://instagram.com/atavratcode"><i class="fa-brands fa-instagram text-offline mr-2"></i></a>
                <a href="https://twitter.com/mishunuz"><i class="fa-brands fa-twitter text-offline mr-2"></i></a>
              </div>
            </div>
            <h1 class="ml-4 font-bold text-color text-xl mt-3 discord_username" style="padding-top:15px;"><span class="text-color text-gray-500">#</span></h1>
            <div class="customStatus ml-4"><span class="text-color text-sm customText"></span></div>
        </div>
    </div>
    <div class="activityDetails" id="activityS"></div>
    </div>
  </div>
</div>
<div class="footer">
  <div class="footer-in padding">
    <p class="footer-text"><button class="navbar-btns mr-1 redirectbtn" onclick="location.href='https://mstranger-things.netlify.app/'">Stranger Things</button></p>
  </div>
  </div>
</div>
</div>
</template>
<script>
    import Navbar from './Navbar.vue';
    import About from './About.vue';
    import Technologies from './Technologies.vue';
    export default {
        components: {
            Navbar,
            About,
            Technologies
        },
        data() {
          return {
            sending: false,
          };
       }
    }
</script>
