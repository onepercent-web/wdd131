window.onload = function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;



    // ノブの詳細情報を表示する  //条件分岐 (Conditional Branching)
    //showKnobDetails関数内で、クリックされたノブの種類に応じて異なる詳細情報を表示しています。
    const knobCards = document.querySelectorAll('.card');
    knobCards.forEach(card => {
        card.addEventListener('click', function() {
            const knobType = card.querySelector('h2').textContent;
            showKnobDetails(knobType);
            //showKnobDetails関数内でテンプレートリテラルを使ってHTMLコンテンツを動的に生成しています。
        });
    });
};

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}



const knobs = [
    { type: 'RATE', function: 'Controls the rate of modulation' },
    { type: 'CUT OFF', function: 'Sets the cutoff frequency of a filter' },
    { type: 'TIME', function: 'Sets the delay time' },
    { type: 'FEED BACK', function: 'Adjusts the amount of feedback' },
    { type: 'PITCH', function: 'Adjusts the pitch' },
    { type: 'DELAY', function: 'Sets the delay effect time' },
    { type: 'SPEED', function: 'Adjusts the speed of the effect' },
    { type: 'DEPTH', function: 'Adjusts the depth of the effect' },
    { type: 'SPREAD', function: 'Adjusts the spread of the effect' },
    { type: 'MIX', function: 'Balances the original and effected sound' },
    { type: 'WAVE', function: 'Selects the waveform of the effect' },
    { type: 'PUMP', function: 'Adjusts the pumping effect' },
    { type: 'GAIN', function: 'Adjusts the input signal amplification' },
    { type: 'LOW CUT', function: 'Cuts low frequencies' },
    { type: 'HIGH CUT', function: 'Cuts high frequencies' },
    { type: 'DRIVE', function: 'Adjusts the distortion effect' },
    { type: 'TONE', function: 'Adjusts the tone' },
    { type: 'LOW', function: 'Adjusts the low frequencies' },
    { type: 'HIGH', function: 'Adjusts the high frequencies' },
    { type: 'TYPE', function: 'Selects the type of effect' },
    { type: 'BASS', function: 'Adjusts the bass frequencies' },
    { type: 'MIDDLE', function: 'Adjusts the mid frequencies' },
    { type: 'COLOR', function: 'Adjusts the color and texture of the effect' },
    { type: 'REVEL', function: 'Adjusts the reverb effect' },
];

//オブジェクト、配列、および配列メソッド (Objects, Arrays, and Array Methods)
//ノブの情報をオブジェクトと配列で管理し、findメソッドを使って特定のノブ情報を検索しています。
function showKnobDetails(knobType) {
    const knob = knobs.find(k => k.type === knobType);
    if (knob) {
        const details = `
            <h2>${knob.type}</h2>
            <p>${knob.function}</p>
        `;
        document.getElementById('content').innerHTML = details;
    } else {
        document.getElementById('content').innerHTML = '<p>Knob details not found.</p>';
    }
}
