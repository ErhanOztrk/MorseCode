const {translate} =require("./app.js");

it("should translate a = *-", ()=>{
    const result = translateEnglishtoMorse('a');
    expect(result).toBe('.-')
});

it("should translate pie = .--...." ,()=>{
    const result =translateEnglishtoMorse('pie');
    expect(result).toBe('.--....')
})
