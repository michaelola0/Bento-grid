/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {

      colors: {
        'purple100':'#DBD1FC',
        'purple500':'#7551DC',
        'yellow100':'#F9EEE2',
        'yellow500':'#FFCC6A',
        'black':'#121212',
      },

      fontFamily: {
        'dmsans':'"DM Sans", serif',
      },

      fontSize: {
        // Desktop
        textPreset1: ['62px', {lineHeight:'93%', letterSpacing:'-3px', fontWeight:'500'}],
        textPreset2: ['40px', {lineHeight:'90%', letterSpacing:'-2px', fontWeight:'500'}],
        textPreset3: ['32px', {lineHeight:'87.5%', letterSpacing:'-2px', fontWeight:'500'}],
        textPreset4: ['18px', {lineHeight:'111%', letterSpacing:'0px', fontWeight:'400'}],

        // Tabelet
        textPreset1Tablet: ['54px', {lineHeight:'48px', letterSpacing:'-4%', fontWeight:'500'}],
        textPreset2Tablet: ['36px', {lineHeight:'30px', letterSpacing:'-6%', fontWeight:'500'}],
        textPreset3Tablet: ['28px', {lineHeight:'26px', letterSpacing:'-6%', fontWeight:'500'}],

        // Mobile
        textPreset1Mobile: ['46px', {lineHeight:'42px', letterSpacing:'-4p%', fontWeight:'500'}],
        textPreset2Mobile: ['32px', {lineHeight:'28px', letterSpacing:'-6%', fontWeight:'500'}],
        textPreset3Mobile: ['26px', {lineHeight:'24px', letterSpacing:'-6%', fontWeight:'500'}],
      },
    },
  },
  plugins: [],
}

