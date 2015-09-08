
/**
 * In Jasmine you can define suite tests with describe
 */
describe('ConferenceService', function(){

  var service, httpService;

  //Sometimes it's usefull to exec statements before or after a test. For that use beforeEach or AfterEach
  beforeEach(function(){
    //We construct a fake object because the real one don't exist
    httpService = {
      get : function(){}
    };

    service = new ConferenceService(httpService);
  });

  //You can stack several describe block to define sub suites. It's a good way to increase readability
  describe('getAll', function(){

    //You can write your individual tests
    it('should return all the conference', function(){
      //spyOn helps you to create stub. If you want to trace how your object is used you can see
      // jasmine.createSpyObj
      spyOn(httpService, 'get').and.returnValue([{title : 'Mix-IT'}, {title : 'JugSummerCamp'}]);
      expect(service.getAll().length).toBe(2);
    });

  });

  describe('getById', function(){
    it('should return the conference with id 1', function(){
      spyOn(httpService, 'get').and.returnValue({title : 'Mix-IT'});
      expect(service.getById(1).title).toBe('Mix-IT');
    });


    it('should return no conference when id is unknown', function(){
      spyOn(httpService, 'get').and.returnValue(undefined);
      expect(service.getById(999)).toBeUndefined();
    });
  });
});

