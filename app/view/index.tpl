<html>
  <head>
    <title>Hacker News</title>
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <p>{{item.name}} : {{item.age}}</p>
      {% endfor %}
    </ul>
  </body>
</html>