<template>
    <div>
        <Header />
            <video autoplay muted disablePictureInPicture loop style="min-height: 100vh;
            object-fit: cover;
            z-index: -10;
            position: fixed;">
            <source src="~/assets/puitsDordogne_2.webm" type="video/webm">
        </video>
        <Nuxt class="content"/>
        <Footer />
    </div>
</template>

<script>
export default{

}
</script>

<style>
/*
body {
    margin: 0;
    display:flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;

    color: white;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.header{
    background-color: rgba(0,0,0,0.4); 
    height: 100vh; 
    width:100%;

    display:flex;
    justify-content: center;
    align-items: center;
}

h1{
    text-align: center;
    text-shadow: 2px black;

    font-size:75pt;
}

h2{
    text-align: center;
    text-shadow: 2px black;

    font-size:40pt;

    margin: 0 2% 5vh 2%;
}

.latest{
    background: white;
    width: 100%;
    min-height: 50vh;

    color: black;

    padding-top:5vh;
    padding-bottom: 5vh;
}

.contact{
    background: black;
    width: 100%;
    min-height: 50vh;

    color: white;

    padding-top:5vh;
    padding-bottom:5vh;

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-around;
}

.contact .description{
    font-size: 40pt;
    border-right: 2px solid white;

    width: 30vw;
    padding-right: 2vw;
}

.contact .contact_links{
    font-size: 40pt;
    width: 30vw;
}
*/
</style>