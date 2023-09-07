import FounderA from './../images/Mario and Adrian A.jpg'
import FounderB from './../images/Mario and Adrian b.jpg'

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1> About Us - Little Lemon</h1>
                    <p>
                    <h4 className="mt-2">Where Tradition Meets Modernity</h4>
                    Welcome to Little Lemon, your neighborhood culinary haven situated in the bustling heart of Chicago. We're not just a restaurant; we're a family—literally. Founded by brothers Mario and Adrian, Little Lemon is a family-owned gem that brings the rich tapestry of Mediterranean cuisine to the Windy City.
                     
                    <h4 className="mt-2">Our Roots</h4>
                    Our love for food isn't just about recipes; it's about family, community, and tradition. As a family-owned establishment, we take immense pride in our roots. Inspired by our family's history and the classic dishes we grew up with, we're committed to delivering an authentic Mediterranean dining experience that feels both traditional and contemporary.

                    <h4 className="mt-2">Our Philosophy</h4>
                    We believe that food should be more than just nourishment. It should be a celebration—of flavors, of cultures, of togetherness. That's why we put our heart and soul into every dish we create, carefully crafting each one to be a work of art. From sourcing the freshest local ingredients to sprinkling that final dash of seasoning, every step is a labor of love.

                    <h4 className="mt-2">The Little Lemon Twist</h4>
                    What sets us apart is our unique ability to balance tradition with innovation. While our menu honors timeless Mediterranean recipes, it also features dishes served with a creative, modern twist. The result is a culinary journey that's both familiar and unexpected, comforting and exciting.

                    <h4 className="mt-2">Come and Visit</h4>
                    Whether you're celebrating a special occasion or just craving some top-notch Mediterranean fare, we invite you to dine with us. Come experience the unparalleled warmth, hospitality, and culinary brilliance that is Little Lemon. We're more than just a meal; we're an experience.

                    We look forward to welcoming you to the Little Lemon family!

                    </p>
               

                </div>
                <div className="col">
                <div className='col-12 col-md'>
          <img src={FounderA} className="card-img-top pt-4 rounded" alt="founder pictures" />
         
          </div>
          <div className='col-12 col-md'><img  src={FounderB} className="card-img-top pt-2 rounded" alt="founder pics" /></div>
         
                </div>
            </div>
        </div>
    
    );
  };
  
  export default About;
  