
let kar = document.querySelector('#karadag')
let x = document.getElementById('hidvis')

let tob = document.querySelector('.tob')
let z = document.getElementById('hidvis1')

let pro = document.querySelector('.pro')
let c = document.getElementById('hidvis2')

let mra = document.querySelector('.mra')
let v = document.getElementById('hidvis3')

let bak = document.querySelector('.bak')
let b = document.getElementById('hidvis4')

let mas = document.querySelector('.mas')
let n = document.getElementById('hidvis5')

let mau = document.querySelector('.mau')
let m = document.getElementById('hidvis6')

let per = document.querySelector('.per')
let a = document.getElementById('hidvis7')

let cosm = document.querySelector('.cosm')
let s = document.getElementById('hidvis8')

let kim = document.querySelector('.kim')
let d = document.getElementById('hidvis9')

let ai = document.querySelector('.ai')
let f = document.getElementById('hidvis10')

let atl = document.querySelector('.atl')
let g = document.getElementById('hidvis11')

let leb = document.querySelector('.leb')
let h = document.getElementById('hidvis12')

let vol = document.querySelector('.vol')
let j = document.getElementById('hidvis13')

let zmi = document.querySelector('.zmi')
let k = document.getElementById('hidvis14')


    z.style.visibility = 'hidden'
    x.style.visibility = 'hidden'
    c.style.visibility = 'hidden'
    v.style.visibility = 'hidden'
    b.style.visibility = 'hidden'
    n.style.visibility = 'hidden'
    m.style.visibility = 'hidden'
    a.style.visibility = 'hidden'
    s.style.visibility = 'hidden'
    d.style.visibility = 'hidden'
    f.style.visibility = 'hidden'
    g.style.visibility = 'hidden'
    h.style.visibility = 'hidden'
    j.style.visibility = 'hidden'
    k.style.visibility = 'hidden'


let info = document.querySelector('#info')
let go = document.getElementById('go')
let i = 0
    go.style.visibility = 'hidden'

info.onclick = function (){
    go.style.visibility = 'visible'
    i++
    if (i>1){
        i = 0
        go.style.visibility = 'hidden'
    }
}



    kar.onmouseenter = function () {
        x.style.visibility = 'visible'
        kar.onmouseleave = function () {
            x.style.visibility = 'hidden'
        }
    }

    kar.onclick = function () {
        open('front1.html#kar1')
    }

    tob.onmouseenter = function () {
        z.style.visibility = 'visible'
        tob.onmouseleave = function () {
            z.style.visibility = 'hidden'
        }
    }

    tob.onclick = function () {
        open('front1.html#tob1')
    }

    pro.onmouseenter = function () {
        c.style.visibility = 'visible'
        pro.onmouseleave = function () {
            c.style.visibility = 'hidden'
        }
    }

    pro.onclick = function () {
        open('front1.html#pro1')
    }

    mra.onmouseenter = function () {
        v.style.visibility = 'visible'
        mra.onmouseleave = function () {
            v.style.visibility = 'hidden'
        }
    }

    mra.onclick = function () {
        open('front1.html#mra1')
    }

    bak.onmouseenter = function () {
        b.style.visibility = 'visible'
        bak.onmouseleave = function () {
            b.style.visibility = 'hidden'
        }
    }

    bak.onclick = function () {
        open('front1.html#bak1')
    }

    mas.onmouseenter = function () {
        n.style.visibility = 'visible'
        mas.onmouseleave = function () {
            n.style.visibility = 'hidden'
        }
    }

    mas.onclick = function () {
        open('front1.html#mas1')
    }

    mau.onmouseenter = function () {
        m.style.visibility = 'visible'
        mau.onmouseleave = function () {
            m.style.visibility = 'hidden'
    }
}

    mau.onclick = function () {
        open('front1.html#mau1')
    }

    per.onmouseenter = function () {
        a.style.visibility = 'visible'
        per.onmouseleave = function () {
            a.style.visibility = 'hidden'
        }
    }

    per.onclick = function () {
        open('front1.html#per1')
    }

    cosm.onmouseenter = function () {
        s.style.visibility = 'visible'
        cosm.onmouseleave = function () {
            s.style.visibility = 'hidden'
        }
    }

    cosm.onclick = function () {
        open('front1.html#cosm1')
    }

    kim.onmouseenter = function () {
        d.style.visibility = 'visible'
        kim.onmouseleave = function () {
            d.style.visibility = 'hidden'
        }
    }

    kim.onclick = function () {
        open('front1.html#kim1')
    }

    ai.onmouseenter = function () {
        f.style.visibility = 'visible'
        ai.onmouseleave = function () {
            f.style.visibility = 'hidden'
        }
    }

    ai.onclick = function () {
        open('front1.html#ai1')
    }

    atl.onmouseenter = function () {
        g.style.visibility = 'visible'
        atl.onmouseleave = function () {
            g.style.visibility = 'hidden'
        }
    }

    atl.onclick = function () {
        open('front1.html#atl1')
    }

    leb.onmouseenter = function () {
        h.style.visibility = 'visible'
        leb.onmouseleave = function () {
            h.style.visibility = 'hidden'
        }
    }

    leb.onclick = function () {
        open('front1.html#leb1')
    }

    vol.onmouseenter = function () {
        j.style.visibility = 'visible'
        vol.onmouseleave = function () {
            j.style.visibility = 'hidden'
        }
    }

    vol.onclick = function () {
        open('front1.html#vol1')
    }

    zmi.onmouseenter = function () {
        k.style.visibility = 'visible'
        zmi.onmouseleave = function () {
            k.style.visibility = 'hidden'
        }
    }

    zmi.onclick = function () {
        open('front1.html#zmi1')
    }







