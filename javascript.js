var playlist = document.querySelector('.playlist')
const cd = document.querySelector('.cd')
const heading = document.querySelector('header h2')
const cdThumb = document.querySelector('.cd-thumb')
const audio = document.getElementById('audio')
const playBtn = document.querySelector('.btn-toggle-play')
const player = document.querySelector('.player')
const nextBtn = document.querySelector('.btn-next')
const preBtn = document.querySelector('.btn-prev')
const progress = document.getElementById('progress')
const randomBtn = document.querySelector('.btn-random')
const repeatBtn = document.querySelector('.btn-repeat')

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: 'For Ya',
            singer: 'Tưởng Tiểu Ni',
            path: './assets/music/song (1).mp3',
            image: './assets/img/song 1.jpg'
        },
        {
            name: 'Sứ Thanh Hoa',
            singer: 'Trần Tâm Di',
            path: './assets/music/song (2).mp3',
            image: './assets/img/song 2.jpg'
        },
        {
            name: 'Không Có lý Do',
            singer: 'Ryan.B',
            path: './assets/music/song (3).mp3',
            image: './assets/img/song 3.jpg'
        },
        {
            name: 'Cực Giống rồi',
            singer: 'Ryan.B',
            path: './assets/music/song (4).mp3',
            image: './assets/img/song 4.jpg'
        },
        {
            name: 'Chịu Cách Mình Nói Thua',
            singer: 'Rhyder',
            path: './assets/music/song (5).mp3',
            image: './assets/img/song 5.jpg'
        },
        {
            name: 'Lan Man',
            singer: 'Ronboogz',
            path: './assets/music/song (6).mp3',
            image: './assets/img/song 6.jpg'
        },
        {
            name: 'Nắng Ấm Xa Dần',
            singer: 'Sơn Tùng M-PT',
            path: './assets/music/song (7).mp3',
            image: './assets/img/song 7.jpg'
        },
        {
            name: 'Omg',
            singer: 'NewJeans',
            path: './assets/music/song (8).mp3',
            image: './assets/img/song 8.jpg'
        },
        {
            name: 'Xích Thêm Chút',
            singer: 'groovie, MCK',
            path: './assets/music/song (9).mp3',
            image: './assets/img/song 9.jpg'
        },
        {
            name: 'Your Smile',
            singer: 'Obito , Hnhngan',
            path: './assets/music/song (10).mp3',
            image: './assets/img/song 10.jpg'
        },
        {
            name: 'As If its Your Love',
            singer: 'BLACKPINK',
            path: './assets/music/song (11).mp3',
            image: './assets/img/song 11.jpg'
        },
        {
            name: 'Em Ngon Như Matcha',
            singer: 'híu x bâu',
            path: './assets/music/song (12).mp3',
            image: './assets/img/song 12.jpg'
        },
        {
            name: 'Kill This Love',
            singer: 'BLACKPINK',
            path: './assets/music/song (13).mp3',
            image: './assets/img/song 13.jpg'
        },
        {
            name: 'Liều Giờ',
            singer: '2T , Văn',
            path: './assets/music/song (14).mp3',
            image: './assets/img/song 14.jpg'
        },
        {
            name: 'Mãi Mãi Không Phải Anh',
            singer: 'Thanh Bình',
            path: './assets/music/song (15).mp3',
            image: './assets/img/song 15.jpg'
        },
        {
            name: 'Nước Mắt Em Lau Bằng Tình Yêu Mới',
            singer: 'Da LAT , Tóc Tiên',
            path: './assets/music/song (16).mp3',
            image: './assets/img/song 16.jpg'
        },
        {
            name: 'Tình Đắng Như Ly Cà Phê',
            singer: 'nân , ngơ',
            path: './assets/music/song (17).mp3',
            image: './assets/img/song 17.jpg'
        },
        {
            name: 'Vết Mưa',
            singer: 'Vũ Cát Tường',
            path: './assets/music/song (18).mp3',
            image: './assets/img/song 18.jpg'
        },
        {
            name: '3107',
            singer: 'W; n,Duongg,Nâu',
            path: './assets/music/song (19).mp3',
            image: './assets/img/song 19.jpg'
        },
        {
            name: '3107 2',
            singer: 'W; n,Duongg,Nâu',
            path: './assets/music/song (20).mp3',
            image: './assets/img/song 20.jpg'
        },
        {
            name: '3107 3',
            singer: 'W; n,Duongg,Nâu',
            path: './assets/music/song (21).mp3',
            image: './assets/img/song 21.jpg'
        },
        {
            name: 'Nasty',
            singer: 'W; n,Duongg,Nâu',
            path: './assets/music/song (22).mp3',
            image: './assets/img/song 22.jpg'
        },
        {
            name: 'what it is',
            singer: 'Doechii',
            path: './assets/music/song (23).mp3',
            image: './assets/img/song 23.jpg'
        },
        {
            name: 'Justine Skyy',
            singer: 'Collide , Tyga',
            path: './assets/music/song (24).mp3',
            image: './assets/img/song 24.jpg'
        },
        {
            name: 'Call Me Maybe',
            singer: 'Carly Rae Jepsen',
            path: './assets/music/song (25).mp3',
            image: './assets/img/song 25.jpg'
        },
        {
            name: 'I.F.L.I',
            singer: 'Bazzzi',
            path: './assets/music/song (26).mp3',
            image: './assets/img/song 26.jpg'
        },
        {
            name: 'Khi Mà',
            singer: 'Ronboogz',
            path: './assets/music/song (27).mp3',
            image: './assets/img/song 27.jpg'
        },
        {
            name: 'Like I Do',
            singer: 'JTajon',
            path: './assets/music/song (28).mp3',
            image: './assets/img/song 28.jpg'
        },
        {
            name: 'Love storty',
            singer: 'Taylor Sweet',
            path: './assets/music/song (29).mp3',
            image: './assets/img/song 29.jpg'
        },
        {
            name: 'Em thích',
            singer: 'Sean , lua',
            path: './assets/music/song (30).mp3',
            image: './assets/img/song 30.jpg'
        },
        {
            name: 'Thêm Bao Nhiêu Lâu',
            singer: 'Đạt G',
            path: './assets/music/song (31).mp3',
            image: './assets/img/song 31.jpg'
        },
        {
            name: 'Vì Anh Đâu Có Biết',
            singer: 'Madihu',
            path: './assets/music/song (32).mp3',
            image: './assets/img/song 32.jpg'
        },
        {
            name: 'Why not me',
            singer: '18 FRV',
            path: './assets/music/song (33).mp3',
            image: './assets/img/song 33.jpg'
        },
        {
            name: 'Yên Một Người Có Lẽ',
            singer: 'Miu Lê , Lou Hoàng',
            path: './assets/music/song (34).mp3',
            image: './assets/img/song 34.jpg'
        },
        {
            name: 'Stay with me',
            singer: 'Goblin',
            path: './assets/music/song (35).mp3',
            image: './assets/img/song 35.jpg'
        },
        {
            name: 'Keep me baby',
            singer: 'Goblin',
            path: './assets/music/song (36).mp3',
            image: './assets/img/song 36.jpg'
        },
        {
            name: 'tied me ...',
            singer: 'Goblin',
            path: './assets/music/song (37).mp3',
            image: './assets/img/song 37.jpg'
        },
        {
            name: 'all for you',
            singer: 'Goblin',
            path: './assets/music/song (38).mp3',
            image: './assets/img/song 38.jpg'
        },
        {
            name: 'I want fire',
            singer: 'Goblin',
            path: './assets/music/song (39).mp3',
            image: './assets/img/song 39.jpg'
        },
        {
            name: 'come make me',
            singer: 'Goblin',
            path: './assets/music/song (40).mp3',
            image: './assets/img/song 40.jpg'
        },
        {
            name: 'masup',
            singer: 'Goblin',
            path: './assets/music/song (41).mp3',
            image: './assets/img/song 41.jpg'
        }
    ],

    render: function () {
        const html = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb"
                        style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
                `;
        });
        playlist.innerHTML = html.join('');
    },

    handleEvents: function () {
        const _this = this
        // Xử lý phóng to thu nhỏ
        const cdWidth = cd.offsetWidth

        document.onscroll = function () {
            const scrollTop = document.documentElement.scrollTop

            const newCdWidth = cdWidth - scrollTop
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth
        }

        // Xử lý với nút play
        playBtn.onclick = function () {
            if (!_this.isPlaying) {
                audio.play()
                player.classList.add('playing')
                _this.isPlaying = true
                cdThumbAnimate.play()
            } else {
                audio.pause()
                player.classList.remove('playing')
                _this.isPlaying = false
                cdThumbAnimate.pause()
            }
        }

        // Đĩa CD quay theo bài hát
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000, // 10 giây
            iterations: Infinity
        })
        cdThumbAnimate.pause()

        // Thanh chạy theo tiến độ bài hát
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }

        // Ấn vào thanh tua
        progress.oninput = function (e) {
            const seekTime = (e.target.value / 100) * audio.duration
            audio.currentTime = seekTime
        }

        // Xử lý nút next
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.randomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            player.classList.add('playing')
            cdThumbAnimate.play()
            _this.render()
            //_this.scrollToActiveSong()
        }

        // Xử lý nút prev
        preBtn.onclick = function () {
            if (_this.isRandom) {
                _this.randomSong()
            } else {
                _this.previousSong()
            }
            audio.play()
            player.classList.add('playing')
            cdThumbAnimate.play()
            _this.render()
            //_this.scrollToActiveSong()
        }

        // Khi bài hát kết thúc
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
        }

        // Khi ấn nút random
        randomBtn.onclick = function () {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        // Khi ấn nút repeat
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        // khi ấn vào bài hát
        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)')

            if (songNode || e.target.closest('.option')) {
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()
                    audio.play()
                    player.classList.add('playing')
                    cdThumbAnimate.play()
                    //_this.scrollToActiveSong()
                }
            }
        }

        // Ấn nút space thì dừng
        document.addEventListener('keydown', function (event) {
            if (event.code === 'Space') {
                event.preventDefault() // Ngăn chặn hành vi mặc định của phím Space
                if (audio.paused) {
                    audio.play()
                    player.classList.add('playing')
                    cdThumbAnimate.play()
                } else {
                    audio.pause()
                    player.classList.remove('playing')
                    cdThumbAnimate.pause()
                }
            }
        })

        // bắt sự kiện nút sang trái
        document.addEventListener('keydown', function (event) {
            if (event.key == 'ArrowRight') {
                _this.nextSong()
                audio.play()
                player.classList.add('playing')
                cdThumbAnimate.play()
                _this.render()
                //_this.scrollToActiveSong()
            }
        })

        document.addEventListener('keydown', function (event) {
            if (event.key == 'ArrowLeft') {
                _this.previousSong()
                audio.play()
                player.classList.add('playing')
                cdThumbAnimate.play()
                _this.render()
                //_this.scrollToActiveSong()
            }
        })
    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },

    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },

    nextSong: function () {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
        this.render()
        // this.scrollToActiveSong()
    },

    previousSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
        this.render()
        // this.scrollToActiveSong()
    },

    randomSong: function () {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (this.currentIndex === newIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
        this.render()
        //this.scrollToActiveSong()
    },

    scrollToActiveSong: function () {
        setTimeout(() => {
            const activeSong = document.querySelector('.song.active');
            if (activeSong) {
                activeSong.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }
        }, 100);
    },

    start: function () {
        // Định nghĩa bài hát
        this.defineProperties()
        // Chiếu lên trang phát nhạc
        this.render()
        // Thực hiện hành động
        this.handleEvents()
        // Load bài hát hiện tại
        this.loadCurrentSong()
    }
}

app.start()
