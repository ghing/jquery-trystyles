jquery-trystyles
================

CSS switching jQuery plugin that uses a query string parameter to select the CSS override

# Usage

Include the ``jquery.trystyles.js`` file in your HTML and initialize the plugin 
with an options object that includes a ``styles`` key:

```
<script src="/static/js/libs/jquery.trystyles.js" type="text/javascript"></script>
<script type="text/javascript">
  jQuery(document).ready(function($) {
      $('body').tryStyles({
          styles: {
              'brownish-orange': ["/static/css/style-brownish-orange.css"],
              'redish-orange': ["/static/css/style-redish-orange.css"]
          }
      });
  });
</script>

```

Then, access your page with ``?trystyles=brownish-orange`` or ``?trystyles=redish-orange`` appended to the URL.

The ``styles`` key of the options object should be an object with keys corresponding to possible arguments to the ``trystyles``
parameter of the query string.  The values should be a list of stylesheet URLs that will be added to the end of the
``<head>`` element.
