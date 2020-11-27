it('should be able to add a registration number of the towns identifified', async function(){
    let capeTown =  ("CA 123-345");

    await reg.setReg(capeTown);
    
        let allReg = await reg.displayReg() 
        
        assert.deepEqual([{registrations : "CA 123-345"}, {reg_id : 1}], allReg);
        
    })