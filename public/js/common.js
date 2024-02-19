"use strict";

function eventHandler() { 
	JSCCommon.init() 

	$(".сustom-select-js").select2({
		tags: true, 
		// allowClear: true,
		dropdownParent: $(".сustom-select-js").parent(),
	});


	$(".сustom-select-js").each(function(){ 
		if (!this.value)  return;
		$(this).parents(".form-wrap__input-wrap").find(".form-wrap__input-title").addClass("active")

	})
	$(".сustom-select-js").on('select2:selecting', function (e) {
		console.log('Selecting: ', e.params.args.data);
		$(this).parents(".form-wrap__input-wrap").find(".form-wrap__input-title").addClass("active")
	});

  new Swiper(".mobile-swiper--js", {
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight: true,
    // breakpoints: {
    //   768: {
    //     slidesPerView: 2,
    //   },
    // },
  });

  // const datePicker = document.querySelector('.daterangepicker')
  // const daterangepickerTitle = document.createElement('div')
  // daterangepickerTitle.classList.add('daterangepicker__title')
  // datePicker.insertAdjacentElement('afterbegin', daterangepickerTitle)
  // daterangepickerTitle.innerText = 'Дата начала практики'

  // const inputDate = document.querySelector('.date')
  // inputDate.addEventListener('click', changeTitle)
  // function changeTitle() {
  //   document.querySelectorAll('td .available').forEach((el) => {
  //     el.addEventListener('click', ()=> {
  //       daterangepickerTitle.innerText = 'Дата окончания практики'
  //     })
  //   })
  // }

  // $('input[name="daterange"]').on('showCalendar.daterangepicker', function(ev, picker) {
  //   $('td.available').on('click', function() {
  //     daterangepickerTitle.text('Дата окончания практики');
  //   });
  // });

};

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

/* select citizenship */
const citizenship = document.querySelectorAll('.gr .custom-input')
const grOther = document.querySelector('.gr-other')
citizenship.forEach(el => {
  el.addEventListener('change', (e)=> {
    const dataEl = el.firstChild.attributes[3].value;
    if (dataEl === 'false') {
      grOther.classList.remove('gr-other-block')
      grOther.classList.add('gr-other-none')
    } else if (dataEl === 'true') {
      grOther.classList.add('gr-other-block')
      grOther.classList.remove('gr-other-none')
    }
  })
})

/* select datePractice: yes or no */
const datePractice = document.querySelectorAll('.data-answ .custom-input')
const dateQuest = document.querySelector('.form-wrap__item.date p')
datePractice.forEach(el => {
  el.addEventListener('click', ()=> {
    document.querySelector('.date').classList.remove('date-hide')
    document.querySelector('.date').classList.add('date-block')
  })
  el.addEventListener('change', (e)=> {
    const dataEl = el.firstChild.attributes[3].value;
    if (dataEl === 'yes') {
      dateQuest.innerText = 'Даты прохождения практики:'
    } else if (dataEl === 'no') {
      dateQuest.innerText = 'Желаемый период прохождения практики:'
    }
  })
})


// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }

/* date picker */
moment.locale('ru');
// localLocale.format('LLLL');

$('input[name="daterange"]').daterangepicker({
    autoUpdateInput: false,
    "parentEl": ".date.form-group",
    showDropdowns: true,
    minYear: parseInt((+moment().format('YYYY') - 1),10),
    maxYear: parseInt((+moment().format('YYYY') + 1),10),
    opens: 'right',
    // "startDate": "02/13/2024",
    locale: {
      cancelLabel: 'Clear',
      format: 'DD.MM.YYYY', // Формат даты
      applyLabel: 'Выбрать', // Текст кнопки "Применить"
      cancelLabel: 'Отмена', // Текст кнопки "Отмена"
      daysOfWeek: [
        'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
      ],
      monthNames: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ],
      firstDay: 1
    },
    maxSpan: {
      days: 31
    }
});
$('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
  $(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));
});
$('input[name="daterange"]').on('hide.daterangepicker', function(ev, picker) {
  $(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));
});

$('input[name="daterange"]').on('cancel.daterangepicker', function(ev, picker) {
  $(this).val('');
});

// $('input[name="daterange"]').on('showCalendar.daterangepicker', function(ev, picker) {
//   document.querySelectorAll('th .available').forEach((el) => {
//     el.on('click', ()=> {
//       daterangepickerTitle.innerText = 'Дата окончания практики'
//     })
//   })
// });

// $('input[name="daterange"]').data('daterangepicker').setStartDate('18.02.2024')
// $('input[name="daterange"]').data('daterangepicker').setEndDate('18.02.2024')
