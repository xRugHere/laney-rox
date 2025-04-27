import ReactDOM from "react-dom";

const personal =
<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '20px' }}>
<div id="image-cell">
        <img src="/assets/chickenJockey.jpg" alt="Project 1" style={{ width: '100%', maxHeight: '500px', margin: 'auto'}} />
        <p>CHICKEN JOCKEY</p>
        <p>CHICKEN JOCKEY, January 2025</p>
    </div>
    <div id="image-cell">
        <img src="/assets/chickenJockey.jpg" alt="Project 1" style={{ width: '100%', maxHeight: '500px', margin: 'auto'}} />
        <p>CHICKEN JOCKEY</p>
        <p>CHICKEN JOCKEY, January 2025</p>
    </div>
    <div id="image-cell">
        <img src="/assets/chickenJockey.jpg" alt="Project 1" style={{ width: '100%', maxHeight: '500px', margin: 'auto'}} />
        <p>CHICKEN JOCKEY</p>
        <p>CHICKEN JOCKEY, January 2025</p>
    </div>
    <div id="image-cell">
        <img src="/assets/chickenJockey.jpg" alt="Project 1" style={{ width: '100%', maxHeight: '500px', margin: 'auto'}} />
        <p>CHICKEN JOCKEY</p>
        <p>CHICKEN JOCKEY, January 2025</p>
    </div>
    <div id="image-cell">
        <img src="/assets/project1.jpeg" alt="Project 1" style={{ width: '100%', maxHeight: '500px', margin: 'auto'}} />
        <p>Hooked Adolescence</p>
        <p>Acrylic Paint, January 2025</p>
    </div>

    <div id="image-cell">
        <img src="/assets/project2.jpeg" alt="Project 2" style={{ width: '100%', maxHeight: '500px', margin: 'auto'}}></img>
        <p>Riot Grrrl</p>
        <p>Mixed Media, April 2024</p>
    </div>
    
    <div id="image-cell">
        <img src="/assets/project3.jpeg" alt="Project 3" style={{ width: '100%', maxHeight: '500px', margin: 'auto'}}></img>
        <p>The Things that go on Inside my Mind</p>
        <p>Mixed Media, April 2024</p>
    </div>
    <div id="image-cell">
        <img src="/assets/project5.jpeg" alt="Project 5" style={{ width: '100%', maxHeight: '500px', margin: 'auto'}}></img>
        <p>Lady Bug to Fish</p>
        <p>Acrylic Paint, January 2025</p>
    </div>
</div>


export const contemporary = <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '20px' }}>
<div id="image-cell">
    <img src="/assets/project4.jpeg" alt="Project 4" style={{ width: '100%', maxHeight: '500px', margin: 'auto'}} />
        <p>Untitled</p>
        <p>Charcoal, October 2024</p>
    </div>
    <div id="image-cell">
    <img src="/assets/project6.jpeg" alt="Project 6" style={{ width: '100%', maxHeight: '400px', margin: 'auto'}} />
        <p>Skull</p>
        <p>Charcoal, November 2023</p>
    </div>
    <div id="image-cell">
        <img src="/assets/project7.jpeg" alt="Project 7" style={{ width: '100%', maxHeight: '450px', margin: 'auto'}}></img>
        <p>Untitled</p>
        <p>Charcoal, October 2024</p>
    </div>
</div>;

export function showPage(pageContent: string) {
    const tempContainer = document.createElement('div');
    if (pageContent === 'personal') {
        ReactDOM.render(personal, tempContainer);
    } else if (pageContent === 'contemporary') {
        ReactDOM.render(contemporary, tempContainer);
    }
  
    const gallery = document.getElementById('gallery');
    if (gallery) {
        gallery.innerHTML = ''; // Clear existing content
        gallery.appendChild(tempContainer);
    }
  
    // Get all image-cell divs
    const cells = tempContainer.querySelectorAll('#image-cell');
  
    cells.forEach((cell, i) => {
      // For each child element inside the cell
      const children = Array.from(cell.children); // converts to array so we can use forEach
  
      children.forEach((el, j) => {
        // Fade each element in with a slight stagger
        setTimeout(() => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)'; // reset transform for images
        }, 200 * (i + j)); // adjust timing if needed
      });
    });
}
