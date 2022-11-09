import StepperLength from './StepperLength';
import $ from 'jquery';

const Stepper = () => {

  const stepperLength = useRef();
  const sectionCount = useRef();

  useEffect(() => {
    // calc number of sections
    var stepperNumber = stepperLength.current.length;
    var sectionTotalNumber = $("section").length;
  
    // dynamically add steppers with new sections
    const stepperTotal = [];
    for (let i = 0; i <= sectionTotalNumber; i++) {
      stepperTotal.push(<StepperLength id={i} key={i} />);
    }
  
    // identify if section is in viewport
    $.fn.isInViewport = function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };
  
    // identify if section is in viewport on scroll
    $(window).on('scroll', function () {
      if ($('section').isInViewport()) {
        console.log("yes")
      } else {
        console.log("no")
      }
    });
  }, [stepperLength, sectionCount]);



  return (
    <div className='stepper'>
      <div className='stepper__text'>
        <h2>Scroll</h2> 
      </div>
      <img src={require("../../assets/images/arrow-icon.png")}></img>
      <div>
      {stepperTotal}
      </div>
    </div>
  )
}

export default Stepper