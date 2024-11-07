const likeButtons = document.querySelectorAll('.likeButton');
const likeCounts = document.querySelectorAll('.likeCount');

likeButtons.forEach((button, index) => {
    let count = localStorage.getItem(`likeCount_${index}`) || 0; 
    likeCounts[index].textContent = count;

    button.addEventListener('click', () => {
        count++;
        likeCounts[index].textContent = count;
        
      
        localStorage.setItem(`likeCount_${index}`, count);
    });
});

