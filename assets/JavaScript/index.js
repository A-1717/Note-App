let notesContainer = document.getElementById('notes-container');
let delCheckedEls = document.getElementById('del-checked-els');
let checkAllEls = document.getElementById('check-all-els');
let cancelCheckedEls = document.getElementById('cancel-checked-els');

// create note methode
const addNoteEvent = () => {
    if (delCheckedEls.style.display === 'flex') {
        return;
    }
    else {
    let noteArticle = document.createElement('article');
    noteArticle.classList.add('note-article');
    notesContainer.append(noteArticle);

    //create note header
    let noteHeader = document.createElement('div');
    noteHeader.classList.add('note-header');
    noteArticle.append(noteHeader);

    let saveIconContainer = document.createElement('div');
    saveIconContainer.classList.add('save-icon-container');
    saveIconContainer.setAttribute('id', 'save-icon-container');
    noteHeader.append(saveIconContainer);
    let saveIcon = document.createElement('img');
    saveIcon.src = "assets/Images/Icons/save.png";
    saveIcon.classList.add('save-icon');
    saveIconContainer.append(saveIcon);
    saveIconContainer.addEventListener('click', (e) => {
        if (titleInpt.value && noteTxt.value) {
            titleInpt.setAttribute('readonly', 'readonly');
            noteTxt.setAttribute('readonly', 'readonly');
            saveIconContainer.style.display = 'none';
        }
        else {
            alert('Enter a title and a note to be able to save them');
        
        }
    })

    let titleInpt = document.createElement('input');
    titleInpt.type = 'text';
    titleInpt.classList.add('title-inpt');
    titleInpt.setAttribute('placeholder', 'Title');
    titleInpt.setAttribute('id', 'title-inpt');
    noteHeader.append(titleInpt);
    titleInpt.addEventListener('focus', (e) => {
        if (!titleInpt.getAttribute('readonly')) {
            saveIconContainer.style.display = "flex";
        }
    })

    let editBtn = document.createElement('div');
    editBtn.classList.add('edit-btn');
    editBtn.setAttribute('id', 'edit-btn');
    noteHeader.append(editBtn);
    editBtn.addEventListener('click', (e) => {
        editMenu.style.display = 'flex';
    })

    let editIcon = document.createElement('img');
    editIcon.src = 'assets/Images/Icons/edit.png';
    editIcon.classList.add('edit-btn-icon');
    editBtn.append(editIcon);

    let editMenu = document.createElement('div');
    editMenu.classList.add('edit-menu');
    editMenu.setAttribute('id', 'edit-menu');
    noteHeader.append(editMenu);

    let closeMenuBtn = document.createElement('div');
    closeMenuBtn.classList.add('close-menu-btn');
    editMenu.append(closeMenuBtn);
    closeMenuBtn.addEventListener('click', (e) => {
        editMenu.style.display = 'none';
    })

    let closeIcon = document.createElement('img');
    closeIcon.src = 'assets/Images/Icons/close.png';
    closeIcon.classList.add('close-icon');
    closeMenuBtn.append(closeIcon);

    let editNoteItem = document.createElement('a');
    editNoteItem.classList.add('edit-menu-item');
    editNoteItem.setAttribute('id', 'edit-note-item');
    editNoteItem.innerText = 'Edit note';
    editMenu.append(editNoteItem);
    editNoteItem.addEventListener('click', (e) => {
        titleInpt.removeAttribute('readonly');
        titleInpt.focus();
        noteTxt.removeAttribute('readonly');
        noteTxt.focus();
        editMenu.style.display = 'none';
    })

    let bgContainerBtn = document.createElement('a');
    bgContainerBtn.classList.add('edit-menu-item');
    bgContainerBtn.classList.add('bg-container-btn');
    bgContainerBtn.setAttribute('id', 'edit-bg-item');
    editMenu.append(bgContainerBtn);

    let bgContainerSpan = document.createElement('span');
    bgContainerSpan.innerText = 'Edit Background';
    bgContainerBtn.append(bgContainerSpan);

    let editBg = document.createElement('div');
    editBg.classList.add('edit-bg');
    bgContainerBtn.append(editBg);

    let bgYellowItem = document.createElement('div');
    bgYellowItem.classList.add('bg-item');
    bgYellowItem.classList.add('yellow-bg');
    bgYellowItem.setAttribute('id', 'yellow-bg');
    editBg.append(bgYellowItem);
    let yellowItemIcon = document.createElement('div');
    bgYellowItem.append(yellowItemIcon);
    bgYellowItem.addEventListener('click', (e) => {
        noteArticle.style.backgroundColor = '#F4D03F';
        titleInpt.style.color = 'rgba(5, 5, 5, .5)';
        titleInpt.classList.add('title-inpt-placeholder-dark');
        titleInpt.classList.remove('title-inpt-placeholder-middle');
        titleInpt.classList.remove('title-inpt-placeholder-light');
        noteTxt.classList.add('note-txt-placeholder-dark');
        noteTxt.classList.remove('note-txt-placeholder-middle');
        noteTxt.classList.remove('note-txt-placeholder-light');
        noteTxt.style.color = 'rgba(15, 15, 15, .5)';
    })

    let bgGreenItem = document.createElement('div');
    bgGreenItem.classList.add('bg-item');
    bgGreenItem.classList.add('green-bg');
    bgGreenItem.setAttribute('id', 'green-bg');
    editBg.append(bgGreenItem);
    let greenItemIcon = document.createElement('div');
    bgGreenItem.append(greenItemIcon);
    bgGreenItem.addEventListener('click', (e) => {
        noteArticle.style.backgroundColor = '#48C9B0';
        titleInpt.style.color = 'white';
        titleInpt.classList.remove('title-inpt-placeholder-dark');
        titleInpt.classList.remove('title-inpt-placeholder-middle');
        titleInpt.classList.add('title-inpt-placeholder-light');
        noteTxt.classList.remove('note-txt-placeholder-dark');
        noteTxt.classList.remove('note-txt-placeholder-middle');
        noteTxt.classList.add('note-txt-placeholder-light');
        noteTxt.style.color = 'rgba(255, 255, 255, .5)';
    })

    let bgRedItem = document.createElement('div');
    bgRedItem.classList.add('bg-item');
    bgRedItem.classList.add('red-bg');
    bgRedItem.setAttribute('id', 'red-bg');
    editBg.append(bgRedItem);
    let redItemIcon = document.createElement('div');
    bgRedItem.append(redItemIcon);
    bgRedItem.addEventListener('click', (e) => {
        noteArticle.style.backgroundColor = '#C0392B';
        titleInpt.style.color = 'white';
        titleInpt.classList.remove('title-inpt-placeholder-dark');
        titleInpt.classList.remove('title-inpt-placeholder-middle');
        titleInpt.classList.add('title-inpt-placeholder-light');
        noteTxt.classList.remove('note-txt-placeholder-dark');
        noteTxt.classList.remove('note-txt-placeholder-middle');
        noteTxt.classList.add('note-txt-placeholder-light');
        noteTxt.style.color = 'rgba(255, 255, 255, .5)';
    })

    let bgPurpleItem = document.createElement('div');
    bgPurpleItem.classList.add('bg-item');
    bgPurpleItem.classList.add('purple-bg');
    bgPurpleItem.setAttribute('id', 'purple-bg');
    editBg.append(bgPurpleItem);
    let purpleItemIcon = document.createElement('div');
    bgPurpleItem.append(purpleItemIcon);
    bgPurpleItem.addEventListener('click', (e) => {
        noteArticle.style.backgroundColor = '#9B59B6';
        titleInpt.style.color = 'white';
        titleInpt.classList.remove('title-inpt-placeholder-dark');
        titleInpt.classList.remove('title-inpt-placeholder-middle');
        titleInpt.classList.add('title-inpt-placeholder-light');
        noteTxt.classList.remove('note-txt-placeholder-dark');
        noteTxt.classList.remove('note-txt-placeholder-middle');
        noteTxt.classList.add('note-txt-placeholder-light');
        noteTxt.style.color = 'rgba(255, 255, 255, .5)';
    })
    
    let bgBlueItem = document.createElement('div');
    bgBlueItem.classList.add('bg-item');
    bgBlueItem.classList.add('blue-bg');
    bgBlueItem.setAttribute('id', 'blue-bg');
    editBg.append(bgBlueItem);
    let blueItemIcon = document.createElement('div');
    bgBlueItem.append(blueItemIcon);
    bgBlueItem.addEventListener('click', (e) => {
        noteArticle.style.backgroundColor = '#3498DB';
        titleInpt.style.color = 'white';
        titleInpt.classList.remove('title-inpt-placeholder-dark');
        titleInpt.classList.add('title-inpt-placeholder-middle');
        titleInpt.classList.remove('title-inpt-placeholder-light');
        noteTxt.classList.remove('note-txt-placeholder-dark');
        noteTxt.classList.add('note-txt-placeholder-middle');
        noteTxt.classList.remove('note-txt-placeholder-light');
        noteTxt.style.color = 'rgba(255, 255, 255, .5)';
    })

    let bgDarkItem = document.createElement('div');
    bgDarkItem.classList.add('bg-item');
    bgDarkItem.classList.add('dark-bg');
    bgDarkItem.setAttribute('id', 'dark-bg');
    editBg.append(bgDarkItem);
    let darkItemIcon = document.createElement('div');
    bgDarkItem.append(darkItemIcon);
    bgDarkItem.addEventListener('click', (e) => {
        noteArticle.style.backgroundColor = '#2C3E50';
        titleInpt.style.color = 'white';
        titleInpt.classList.remove('title-inpt-placeholder-dark');
        titleInpt.classList.remove('title-inpt-placeholder-middle');
        titleInpt.classList.add('title-inpt-placeholder-light');
        noteTxt.classList.remove('note-txt-placeholder-dark');
        noteTxt.classList.remove('note-txt-placeholder-middle');
        noteTxt.classList.add('note-txt-placeholder-light');
        noteTxt.style.color = 'rgba(255, 255, 255, .5)';
    })

    let bgBtnIconContainer = document.createElement('span');
    bgBtnIconContainer.classList.add('bg-btn-icon-container');
    bgContainerBtn.append(bgBtnIconContainer);

    let bgBtnIcon = document.createElement('img');
    bgBtnIcon.src = 'assets/Images/Icons/left.png';
    bgBtnIconContainer.append(bgBtnIcon);

    let delFromMenuItem = document.createElement('a');
    delFromMenuItem.classList.add('edit-menu-item');
    delFromMenuItem.setAttribute('id', 'delete-item');
    delFromMenuItem.innerText = 'Delete';
    editMenu.append(delFromMenuItem);
    delFromMenuItem.addEventListener('click', (e) => {
        noteArticle.parentNode.removeChild(noteArticle);
    })

    //create note main
    let noteMain = document.createElement('div');
    noteMain.classList.add('note-main');
    noteArticle.append(noteMain);

    let noteTxt = document.createElement('textarea');
    noteTxt.classList.add('note-txt');
    noteTxt.setAttribute('id', 'note-txt');
    noteTxt.setAttribute('placeholder', 'Write your note here...');
    noteMain.append(noteTxt);
    
    // check box
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('check-box')
    noteArticle.append(checkBox);
    }
}

// aside display
let asideBar = document.getElementById('aside');
let assideDisplayBtn = document.getElementById('left-icon-container');
assideDisplayBtn.addEventListener('click', (e) => {
    if (!assideDisplayBtn.lastElementChild.classList.contains('to-left')) {
        assideDisplayBtn.lastElementChild.classList.add('to-left');
        asideBar.style.left = -200 + 'px';
    } else {
        assideDisplayBtn.lastElementChild.classList.remove('to-left');
        asideBar.style.left = 0 + 'px';
    }
})

// element from the previous event
let noteArticleGlobe = document.getElementsByClassName('note-article');
let checkBoxGlobe = document.getElementsByClassName('check-box');

let delNotes = document.getElementById('del-notes');
delNotes.addEventListener('click', (e) => {
    let noteArticleArr = Array.from(noteArticleGlobe);
    noteArticleArr.forEach(value => {
        value.lastChild.style.display = 'flex';
    })
    //delete button 
        
        let checkBoxArr = Array.from(checkBoxGlobe);
            delCheckedEls.addEventListener('click', (e) => {
                let checkedCh = checkBoxArr.filter(val => {
                    return val.checked;
                })
                checkedCh.forEach(value => {
                    value.parentElement.remove();
                    if (checkedCh) {
                        delCheckedEls.style.display = 'none';
                        checkAllEls.style.display = 'none';
                        cancelCheckedEls.style.display = 'none';
                        checkBoxArr.forEach(valu => {
                            valu.style.display = 'none';
                        })
                    }
                })

            })

    // select all button
        
            checkAllEls.addEventListener('click', (e) => {
                checkBoxArr.forEach(value => {
                    value.checked = true;
                })
            })

    // cancel button
        
            cancelCheckedEls.addEventListener('click', (e) => {
                noteArticleArr.forEach(value => {
                    value.lastChild.checked = false;
                    value.lastChild.style.display = 'none';
                })
                delCheckedEls.style.display = 'none';
                checkAllEls.style.display = 'none';
                cancelCheckedEls.style.display = 'none';
            })
            delCheckedEls.style.display = 'flex';
            checkAllEls.style.display = 'flex';
            cancelCheckedEls.style.display = 'flex';
})

let MoodBtn = document.getElementById('night-light-mood');
MoodBtn.addEventListener('click', (e) => {
    let sunMoonIcon = document.getElementById('sun-moon-icon');
    let bodytonight = document.querySelector('body');
    if (bodytonight.getAttribute('class', 'body-night')) {
        bodytonight.classList.remove('body-night');
        sunMoonIcon.src = 'assets/Images/Icons/moon.png';
    }
    else {
        bodytonight.classList.add('body-night');
        sunMoonIcon.src = 'assets/Images/Icons/sun.png';
    }
})
