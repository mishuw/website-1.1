const inviteBtn = document.querySelector('.invite');
const inviteName = document.querySelector('.name');
const inviteImg = document.querySelector('.icon');

fetch("https://discordapp.com/api/v6/invite/Kfh6Hr4tKy?with_counts=true", {
        method: 'GET',
        headers: {
                  'Content-Type': 'application/json'
                 },
}).then(response => {
        response.json().then(data => {
            console.log(data)
            document.querySelector(".icon")?.src = 'https://cdn.discordapp.com/icons/' + data.guild.id + '/' + data.guild.icon+'';
            document.querySelector('.name')?.innerText = data.guild.name.length > 14 ? data.guild.name.substring(0, 14) + "..." : data.guild.name;
            document.querySelector(".members")?.innerHTML = data.approximate_presence_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' <span class="onlinetext">Online</span>'
            document.querySelector(".topmembers")?.innerHTML = data.approximate_member_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' <span class="totalMemberText">Members</span>'
            inviteBtn.addEventListener('click', () =>{
                document.querySelector('.invite')?.innerText = 'Joined'
                window.open('https://discord.com/invite/'+data.code, '_BLANK')
                document.querySelector('.invite')?.style.background = 'transparent';
                document.querySelector('.invite')?.style.border = '1px solid rgb(45 125 70/1)';
            })
            inviteName.addEventListener('click', () =>{
                document.querySelector('.invite')?.innerText = 'Joined'
                window.open('https://discord.com/invite/'+data.code, '_BLANK')
                document.querySelector('.invite')?.style.background = 'transparent';
                document.querySelector('.invite')?.style.border = '1px solid rgb(45 125 70/1)';
            })
            inviteImg.addEventListener('click', () =>{
                document.querySelector('.invite')?.innerText = 'Joined'
                window.open('https://discord.com/invite/'+data.code, '_BLANK')
                document.querySelector('.invite')?.style.background = 'transparent';
                document.querySelector('.invite')?.style.border = '1px solid rgb(45 125 70/1)';
            })
        })
    }).catch(error => {
        console.log('Discord API Error')
        document.querySelector('.name').innerText = 'API ERROR'
            inviteBtn.addEventListener('click', () =>{
                document.querySelector('.invite')?.innerText = 'Joined'
                window.open('https://discord.com/invite/212', '_BLANK')
        })
    })
