import React from 'react';

function removeElementsFromHTML(htmlString, elementSelector) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlString;

  const elementsToRemove = tempDiv.querySelectorAll(elementSelector);
  elementsToRemove.forEach((element) => {
    element.parentNode.removeChild(element);
  });

  return tempDiv.innerHTML;
}

const Content = ({ description }) => {
  return (
    <div className="article" dangerouslySetInnerHTML={{ __html: description }} />
  );
}

const TruncatedWords = ({ description }) => {
  if (!description.includes('<img')) {
    return null; 
  }
  const cleanedContent = removeElementsFromHTML(description, "img");
  return (
    <div className="truncated" dangerouslySetInnerHTML={{ __html: cleanedContent }} />
  );
}

export { Content, TruncatedWords };







