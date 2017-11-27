'use strict';

var userDialog = document.querySelector('.setup');
var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors	= ['black', 'red', 'blue', 'yellow', 'green'];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomIndex = function (array) {
  return Math.floor(Math.random() * array.length);
};

var wizards = [
  {
    'name': wizardNames[getRandomIndex(wizardNames)] + ' ' + wizardSurnames[getRandomIndex(wizardSurnames)],
    'coatColor': coatColors[getRandomIndex(coatColors)],
    'eyesColor': eyesColors[getRandomIndex(eyesColors)]
  },
  {
    'name': wizardNames[getRandomIndex(wizardNames)] + ' ' + wizardSurnames[getRandomIndex(wizardSurnames)],
    'coatColor': coatColors[getRandomIndex(coatColors)],
    'eyesColor': eyesColors[getRandomIndex(eyesColors)]
  },
  {
    'name': wizardNames[getRandomIndex(wizardNames)] + ' ' + wizardSurnames[getRandomIndex(wizardSurnames)],
    'coatColor': coatColors[getRandomIndex(coatColors)],
    'eyesColor': eyesColors[getRandomIndex(eyesColors)]
  },
  {
    'name': wizardNames[getRandomIndex(wizardNames)] + ' ' + wizardSurnames[getRandomIndex(wizardSurnames)],
    'coatColor': coatColors[getRandomIndex(coatColors)],
    'eyesColor': eyesColors[getRandomIndex(eyesColors)]
  }
];
// Создание дом элемента
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
