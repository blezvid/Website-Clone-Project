body {
    font - family: system - ui, -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans - serif;
    display: block;
    box - sizing: inherit;
    margin: 0;
    max - width: 1800px;
}

.mainAndFooter {
    display: flex;
    flex - direction: column;
    min - height: min - content;
    background - color: #fff;
    background - size: cover;
    padding: 0;
    row - gap: 2.5rem;
}

main {
    display: flex;
    flex - direction: column;
    min - height: min - content;
    background - color: #fff;
    background - size: cover;
    padding: 0;
    row - gap: 2.5rem;
}

.mainHead {
    padding: 3rem;
    background - color: #05203c;
}

.insideMainHead {
    margin: 0 auto;
    max - width: 76.5rem;
}

header {
    background - color: #05203c;
    display: flex;
    flex - direction: row;
    color: white;
    align - items: center;
    margin: 0;
}

header h2 {
    margin: 0;
    padding: 0;
    cursor: pointer;
}

header nav {
    margin - left: auto;
}

header nav a {
    color: #fff;
    text - decoration: none;
    margin - left: 15px;
}

.head2 {
    display: block;
    background - color: #05203c;

    color: white;
    align - items: center;
    margin: 0;
    margin - bottom: 1.5rem;
    margin - top: 2.5rem;
}

.head3 {
    display: block;
    margin: 0;
    padding: 0;
    justify - items: center;
}

.head2.head3 a {
    color: #fff;
    text - decoration: none;
}

.head3 a.one {
    color: black;
    text - decoration: none;
}

.head3 a.two {
    color: #fff;
    text - decoration: none;
}

.buttonone {
    border: 1px solid #fff;
    border - radius: 10px;
    background: #fff;
    width: 80px;
    height: 30px;
}

.buttontwo {
    border: 1px solid #e3dfdf92;
    border - radius: 10px;
    background: #05203c;
    width: 80px;
    height: 30px;
}

.buttontwo:hover {
    border: 1.3px solid #fff;
    border - radius: 10px;
    background: #05203c;
    width: 80px;
    height: 30px;
}

.head3 {
    background - color: #05203c;
    margin - top: .5rem;
    box - sizing: inherit;
    display: block;
}

.head4 {
    margin - top: .5rem;
    width: 100 %;
    box - sizing: inherit;
    display: block;
}

.universalsearchbox {
    background - color: #05203c;
    color: black;
    display: flex;
    flex - wrap: wrap;
    box - sizing: border - box;
    column - gap: .25rem;
}

@media(max - width: 64rem) {
    .insideMainHead.universalsearchbox {
        display: flex;
        flex - wrap: wrap;
    }

    .universalsearchbox #bigbox1 {
        order: 1;
        width: 6rem;
    }

    .universalsearchbox #bigbox2 {
        order: 2;
        width: 6rem;
    }

    .universalsearchbox #bigbox3 {
        order: 3;
        width: 6rem;
        flex - shrink: 1;
    }

    .universalsearchbox #bigbox4 {
        order: 4;
        width: 6rem;
    }

    .universalsearchbox #bigbox5 {
        order: 6;
        padding: 0;
        width: 6rem;
    }

    .universalsearchbox #bigbox6 {
        width: 6rem;
        order: 6;
        width: 6rem;
    }
}

@media(max - width: 48rem) {
    .insideMainHead.universalsearchbox {
        display: flex;
        flex - wrap: wrap;
        gap: 0.15rem;
    }

    .universalsearchbox #bigbox1 {
        flex - basis: 100 %;
        flex - grow: 1;
        flex - shrink: 0;
        order: 1;
    }

    .universalsearchbox #bigbox2 {
        flex - basis: 100 %;
        flex - grow: 1;
        flex - shrink: 0;
        order: 2;
    }

    .universalsearchbox #bigbox3 {
        flex - basis: 40 %;
        flex - grow: 0;
        flex - shrink: 0;
        order: 3;
    }

    .universalsearchbox #bigbox4 {
        flex - basis: 40 %;
        flex - grow: 0;
        flex - shrink: 0;
        order: 4;
    }

    .universalsearchbox #bigbox5 {
        flex - basis: 100 %;
        flex - grow: 0;
        flex - shrink: 0;
        order: 6;
        padding: 0;
        margin: 0;
    }

    .universalsearchbox #bigbox6 {
        flex - basis: 100 %;
        flex - grow: 0;
        flex - shrink: 0;
        order: 5;
        padding - bottom: 1.5rem;
    }

    .universalsearchbox.checkbox {
        display: none;
    }

    .universalsearchbox #fromBox {
        border - radius: 0;
    }

    .universalsearchbox #travellersBox {
        border - radius: 0;
    }
}

.bigbox {
    display: flex;
    flex - direction: column;
}

.searchbox {
    display: flex;
    flex - direction: column;
    flex - wrap: wrap;
    box - sizing: inherit;
    padding: 0;
    background - color: #fff;
    height: 4.5rem;
    padding: 0 1rem;
    justify - content: center;
}

#fromBox {
    border - radius: .75rem 0 0 .75rem;
}

#travellersBox {
    border - radius: 0 .75rem .75rem 0;
}

#bigbox1 {
    flex - grow: 1;
    flex - basis: 18 %;
}

#bigbox2 {
    flex - grow: 1;
    flex - basis: 18 %;
}

#bigbox3 {
    flex - basis: 20 %;
}

#bigbox4 {
    flex - basis: 20 %;
}

.checkbox {
    display: inline - block;
    margin - top: 0.5 rem;
    height: unset;
    padding: 0 2rem 0 0;
    outline: none;
    border: none;
    color: white;
    overflow: hidden;
    text - overflow: ellipsis;
    white - space: nowrap;
    margin - top: .5rem;
}

#fromCheckBox {
    -webkit - appearance: none;
    border: .1875rem solid #545860;
    background - color: #fff;
    border - radius: .25rem;
    cursor: pointer;
    height: 1rem;
    width: 1rem;
    margin: 0;
    padding: 0;
    vertical - align: text - bottom;
}

#toCheckBox {
    -webkit - appearance: none;
    border: .1875rem solid #545860;
    background - color: #fff;
    border - radius: .25rem;
    cursor: pointer;
    height: 1rem;
    width: 1rem;
    margin: 0;
    padding: 0;
    vertical - align: text - bottom;
}

#direct {
    -webkit - appearance: none;
    border: .1875rem solid #545860;
    background - color: #fff;
    border - radius: .25rem;
    cursor: pointer;
    height: 1rem;
    width: 1rem;
    margin: 0;
    padding: 0;
    vertical - align: text - bottom;
}

.departReturn {
    display: flex;
    flex - direction: row;
    column - gap: .25rem;
}

input {
    border: none;
    box - sizing: inherit;
    padding - top: 5px;
    padding - bottom: 5px;
}

.button {
    margin - left: .75rem;
}

#searchbutton {
    display: flex;
    align - items: center;
    background: #0062e3;
    border: none;
    border - radius: .75rem;
    padding: 1rem;
    height: 4.5rem;
    cursor: pointer;
    color: #fff;
    font - family: system - ui, -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans - serif;
    font - size: larger;
    text - decoration: none;

    height: 4.5rem;
    justify - content: center;
    margin - left: .75rem;
}

#searchbutton:hover { }

.directflights {
    color: #fff;
    display: block;
    margin - top: 1rem;
    order: 10;
    width: 100 %;
}

.middleBox {
    padding: 0 3rem;
    display: flex;
    flex - direction: column;
    row - gap: 2.5rem;
}

#moreoptions {
    display: flex;
    justify - content: space - between;
    gap: 2rem;
    align - items: center;
    padding - top: 2rem;
    margin - right: 3rem;
    margin - left: 3rem;
}

.tabs {
    border: 0;
    border - radius: 1rem;
    padding: 0.25rem;
    background: #05203c;
    color: #fff;
    width: 320px;
    height: 80px;
}

.tabs a {
    color: #fff;
    text - decoration: none;
    font - size: 1rem;
    font - weight: 200;
}

@media(max - width: 48rem) {
    .middleBox {
        padding: 2rem;
    }

    #moreoptions {
        margin: 0;
        gap: 1rem;
    }
}

.grid2 {
    padding: 0;
    margin - left: 3rem;
    margin - right: 3rem;
    border: 0;
    border - radius: 1rem;
    overflow - x: hidden;
}

@media(max - width: 48rem) {
    .grid2 {
        margin: 0;
        padding: 0;
    }
}


#hotMonthPhoto {
    background - image: url("https://content.skyscnr.com/m/cea00f484c05dc8/original/WH-April-Graphic-Promo-Desktop-2096x800.jpg?imbypass=true");
    background - position: 50 %;
    background - size: cover;
    box - shadow: none;
    color: #fff;
    margin - left: auto;
    margin - right: auto;
}

.hotMonth {
    display: flex;
    flex - direction: column;
    justify - content: center;
    align - items: start;
    height: 28.75rem;
    margin - left: 4rem;
    margin - right: 2.5rem;
}

#exploreNow {
    display: flex;
    flex - direction: column;
    width: 22.5rem;
}

#exploreNow h2 {
    font - size: 3rem;
    font - weight: 640;
    letter - spacing: -.02em;
    line - height: 3.5rem;
    margin - top: 0.5rem;
    margin - bottom: 0.5rem;
}

#exploreNow p {
    font - size: 1rem;
    font - weight: 400;
    line - height: 1.5rem;
    margin: 0;
}

#exploreNow button {
    display: block;
    margin - top: 2rem;
    padding: 0;
    border: 0;
    border - radius: 0.5rem;
    width: 35 %;
    cursor: pointer;
    font - size: 1rem;
    font - weight: 700;
    line - height: 1.5rem;
    min - height: 2.25rem;
    text - align: center;
}


.semi - transparent - button:hover {
    background - color: rgba(0, 0, 0, 0.7);
}



.grid3 {
    justify - content: flex - start;
    padding - left: 3rem;
    padding - right: 3rem;
}

.popular - flights {
    padding - left: 3rem;
    padding - right: 3rem;
    display: grid;
    grid - gap: 1rem 1rem;
    grid - template - columns: auto auto auto;
}

.city - container {
    display: flex;
    flex - direction: row;
    align - items: center;
    gap: 0.5rem;
    overflow - x: hidden;
    background - color: #fff;
    border - radius: .75rem;
    box - shadow: 0 1px 3px 0 #25201f4d;
    color: #161616;
    position: relative;
    text - decoration: none;
    margin: 0;
    padding: 0;
}

.city {
    font - weight: 660;
}

.cityImage {
    display: flex;
    align - self: stretch;
}

.cityMenu {
    flex - grow: 1;
    align - content: flex - start;
}

.FHCH {
    display: flex;
    flex - direction: row;
    justify - content: flex - start;
    gap: .25rem;
    color: #0062e3;
    font - size: .8rem;
    cursor: pointer;
}

.faqs {
    justify - content: flex - start;
    padding - left: 3rem;
    padding - right: 3rem;
    margin - top: 3rem;
}

.questions {
    display: flex;
    flex - direction: row;
    gap: 1rem;
    flex - wrap: wrap;
    cursor: pointer;
}

#block1 {
    width: 49 %;
    cursor: pointer;
    font - size: 1rem;
    font - weight: 620;
}

.block1 {
    border - bottom: 1px solid rgba(128, 128, 128, 0.432);
    padding - top: 1rem;
    padding - bottom: 1rem;
}

#block2 {
    width: 49 %;
    cursor: pointer;
    font - size: 1rem;
    font - weight: 620;
}

.block2 {
    border - bottom: 1px solid rgba(128, 128, 128, 0.432);
    padding - top: 1rem;
    padding - bottom: 1rem;
}

.others {

    display: block;
    margin: 3 rem;
}

#others {
    margin - top: 2rem;
    margin - bottom: 3rem;
    padding - left: 3rem;
    padding - right: 3rem;
}

#others h3 {
    border - bottom: 1px solid rgba(128, 128, 128, 0.432);
    font - size: 1.3rem;
    font - weight: 650;
    padding - bottom: 1rem;
    cursor: pointer;
}


@media(max - width: 48rem) {

    .grid3,
    .popular - flights,
    .faqs,
        #others {
        padding: 0;
    }

    .popular - flights {
        display: block;
    }

}

@media(max - width: 48rem) {

    #block1,
        #block2 {
        justify - content: flex - start;
        align - items: center;
        flex - basis: 100 %;
    }
}


footer {
    background - color: #05203c;
    padding - left: 6rem;
    padding - right: 6rem;
    gap: 6rem;
    display: block;
    color: white;
}


.footerContainer {
    display: grid;
    grid - template - columns: 1fr 1fr 1fr 1fr;
    grid - column - gap: 1.5rem;
    justify - content: space - between;
    padding - top: 4rem;
}

.footerButton {
    align - items: center;
    background - color: initial;
    border: 2px solid #fff;
    border - radius: .5rem;
    box - shadow: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    font - size: .75rem;
    font - weight: 400;
    line - height: 1rem;
    padding: .25rem 1.5rem;
    width: 100 %;
}

.ukFlag {
    border: 1px solid #e0e4e9;
    box - sizing: initial;
    height: .5rem;
    margin - right: .25rem;
    min - width: .5rem;
}

.insideContainer {
    display: flex;
    flex - direction: column;
    font - size: 0.8rem;
    font - weight: 500;
    line - height: 1.5rem;
    cursor: pointer;
}

.footerBox {
    padding - top: 0.5rem;
    padding - bottom: 0.5rem;
}

.copyright {
    display: block;
    margin: 0 auto;
    padding: 2.5rem 0 1.5rem;
    width: fit - content;
    font - size: smaller;
    color: #cccfd4ce;
}

@media(max - width: 48rem) {
    footer {
        padding - left: 2rem;
        padding - right: 2rem;
    }

    .footerContainer {
        padding - top: 2rem;
        display: block;
    }

    .insideContainer {
        margin - top: 1rem;
        margin - bottom: 1rem;
    }
}