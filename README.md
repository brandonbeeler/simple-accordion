Simple Accordion
================

Creates an EXTREMELY simple 2-level expandable accordion.


Getting Started
================

1. Include jQuery and simple-accordion script & simple-accordion.css on html page.
2. Place markup for accordion. Here is an example of the markup for an accordion with two groups. Note that it is required to include an id on the accordion-group element.
   
    ```
    <div class="simple-accordion">
      <div id='test1' class="accordion-group collapsed">
  			<div class='group-header'>Test Header</div>
  
  		 	<div class="accordion-sub-group">
  		    	<ul class="accordion-sub-inner">
                  <li class="accordion-item"><a href="#">Test Link</a></li>
  			    </ul>
  			</div>
  		</div>
  		
  		<div id='test2' class="accordion-group collapsed">
  			<div class='group-header'>Test Header 2</div>
  
  		 	<div class="accordion-sub-group">
  		    	<ul class="accordion-sub-inner">
                  <li class="accordion-item"><a href="#">Test Link 2</a></li>
  			    </ul>
  			</div>
  		</div>
    </div>
    ```
    
3. Initialize the accordion. *ie. new SimpleAccordion('#selector');*
