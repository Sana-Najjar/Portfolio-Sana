const dict = {
  fr: {
    'hello': "Bonjour, je suis Sana Najjar",
    "webMaster": "intégrateur web",
  },
  en: {
    'hello': "Hello, I am Sana Najjar",
    "webMaster": "web integrator",
  }
}

const usedLocale = window.localStorage.getItem('locale');
export default dict[usedLocale || 'fr'];