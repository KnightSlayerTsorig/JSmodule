//Callback Hell

/*
function wakeUp(time, cb) {
    console.log('Будильник заздвенів, пора вставати!')

    setTimeout(() => {
        if (time > 9) {
            cb('Що далі?');
        }
        else {
            cb(null, 'Ще пять хвилиночок...')
        }
    }, 1500)
}

function breakfast(food, cb) {
    setTimeout(() => {
        console.log('Іду снідати.');
    }, 1500)

    setTimeout(() => {
        if (!food) {
            cb(null, ' дуля з маком :(((');
        }
        else {
            cb(' картопля');
        }
    }, 2500)
}

function gym(lift, cb) {
    setTimeout(() => {
        console.log('Прихожу в зал. Буду жати...');
    }, 1500)

    setTimeout(() => {
        if (!lift) {
            cb(null, 'Я дрищ не зміг вижати сотку і мене роздавило штангою. ');
        }
        else {
            cb('Я молодець, пожав сотку! ');
        }
    }, 2500)
}

function work(title, cb) {
    setTimeout(() => {
        console.log('Йду на роботу...');
    }, 1500)

    setTimeout(() => {
        if (title === 'junior') {
            cb(null, 'Я джун!');
        }
        else {
            cb('сіньор');
        }
    }, 2500)
}

function vacation(tickets, cb) {
    setTimeout(() => {
        console.log('Їду в аеропорт...');
    }, 1500)

    setTimeout(() => {
        if (!tickets) {
            cb('блондиночка');
        }
        else {
            cb('Мальдіви!');
        }
    }, 2500)
}

function chooseGirl(hairColor, cb) {
    setTimeout(() => {
        console.log('Йду в клюб шукати дівчину...');
    }, 1500)

    setTimeout(() => {
        if (hairColor === 'white') {
            cb('блондиночку.');
        }
        else if (hairColor === 'black'){
            cb('брюнеточку.');
        }
        else {
            cb('Петра.');
        }
    }, 2500)
}

function goHome(daylight, cb) {
    setTimeout(() => {
        console.log('Петро закрив мене в кімнаті');
    }, 1500)

    setTimeout(() => {
        if (daylight) {
            cb(null, 'На дворі світло.')
        }
        else {
            cb('На дворі темно. ')
        }
    }, 2500)
}



wakeUp(19, (next, err) => {
    if (err) {
        console.log (err)
    }
    else {
        console.log ('Я прокинувся. ' + next);
        breakfast(true,(eat, err) => {
            if (err) {
                console.log('На сніданок -' + err);

                setTimeout(() => {
                    console.log('Я помер з голоду :(')
                }, 1500)
            }
            else {
                console.log('На сніданок -' + eat);
                    gym(true, (press, err) => {
                        if (err) {
                            console.log(err + 'Треба їсти більше каші! :(((')
                        }
                        else {
                            console.log(press + 'Але кашу всерівно треба їсти!')
                            work( 'junior',(job, err) => {
                                if (err) {
                                    console.log(err + ' Мені не потрібна робота у мене купа бабла!!!!!')
                                    vacation(true, (place, err) => {
                                        if (err) {
                                            console.log(err);
                                        }
                                        else {
                                            console.log('Ура я лечу на ' + place);
                                            chooseGirl('sdsd', (color) => {
                                                if (color) {
                                                    console.log('Круто, я підцепив ' + color);
                                                    goHome(true, (run, err) => {
                                                        if (err) {
                                                            console.log(err + 'Ти не зміг втекти, тепер ' + color + ' - Твій повелитель')
                                                        }
                                                        else {
                                                            console.log(run + 'Ти зміг втекти, більше ні ногою на мальдіви...')
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                                else {
                                    console.log('Я жалюгідний ' + job + ' - працюю за пачку мівіни :(((')
                                }
                            })
                        }
                    })

            }
        })

    }

})*/

//promise

function wakeUp(time) {
    return new Promise((resolve, reject) => {
        console.log('Будильник заздвенів, пора вставати!')

        setTimeout(() => {
            if (time > 9) {
                resolve('Що далі?');
            }
            else {
                reject('Ще пять хвилиночок...');
            }
        }, 1500)
    })
}

function breakfast(food) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Іду снідати.');
        }, 1500)

        setTimeout(() => {
            if (!food) {
                reject(' На сніданок - дуля з маком :(((');
            }
            else {
                resolve(' картопля');
            }
        }, 2500)
    })
}

function gym(lift) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Прихожу в зал. Буду жати...');
        }, 1500)

        setTimeout(() => {
            if (!lift) {
                reject('Я дрищ не зміг вижати сотку і мене роздавило штангою. ');
            }
            else {
                resolve('Я молодець, пожав сотку! ');
            }
        }, 2500)
    })
}

function work(title) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Йду на роботу...');
        }, 1500)

        setTimeout(() => {
            if (title === 'junior') {
                resolve('Я джун!');
            }
            else {
                reject('Я жалюгідний сіньор - працюю за пачку мівіни :(((');
            }
        }, 2500)
    })
}

function vacation(tickets) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Їду в аеропорт...');
        }, 1500)

        setTimeout(() => {
            if (!tickets) {
                reject('Я дурко, забувся квитки вдома((((');
            }
            else {
                resolve('Мальдіви!');
            }
        }, 2500)
    })
}

function chooseGirl(hairColor) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log('Йду в клюб шукати дівчину...');
        }, 1500)

        setTimeout(() => {
            if (hairColor === 'white') {
                resolve('блондиночку.');
            }
            else if (hairColor === 'black'){
                resolve('брюнеточку.');
            }
            else {
                resolve('Петра.');
            }
        }, 2500)
    })
}

function goHome(daylight) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Петро закрив мене в кімнаті');
        }, 1500)

        setTimeout(() => {
            if (!daylight) {
                reject('На дворі світло. Я не зміг втекти, тепер Петро - Мій повелитель')
            }
            else {
                resolve('На дворі темно. ')
            }
        }, 2500)
    })
}



wakeUp(4)
    .then(next => {
        console.log('Я прокинувся. ' + next);
        return breakfast(true)
    })
    .then(eat => {
        console.log('На сніданок -' + eat);
        return gym(true)
    })
    .then(press => {
        console.log(press + 'Але кашу всерівно треба їсти!')
        return work('junior')
    })
    .then(money => {
        console.log(money + ' Мені не потрібна робота у мене купа бабла!!!!!')
        return vacation(true)
    })
    .then(place => {
        console.log('Ура я лечу на ' + place);
        return chooseGirl('sdsd');
    })
    .then(color => {
        console.log('Круто, я підцепив ' + color);
        return goHome(true);
    })
    .then(run => {
        console.log(run + 'Я зміг втекти, більше ні ногою на мальдіви...')
    })
    .catch(reason => {
        console.log(reason);
    })
