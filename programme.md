---
label: Programme
description: The online programme for the !!conference.year!! !!conference.full_name!! conference.
---

# Programme

{% if site.url contains "localhost" %}

{% assign num_sessions = 0 %}
{% assign num_keynotes = 0 %}
{% assign num_full_papers = 0 %}
{% assign num_provocation_papers = 0 %}
{% assign num_panels = 0 %}
{% assign num_demos = 0 %}
{% assign num_posters = 0 %}
{% assign num_featured_talks = 0 %}
{% for day in site.data.days %}
    {% assign days_sessions = site.data.sessions[day.id] | size %}
    
    {% for session in site.data.sessions[day.id] %}
        {% if session.type == "Session" %}
            {% assign num_sessions = num_sessions | plus: 1 %}
        {% endif %}
    
        {% for presentation in site.data.presentations[session.id] %}
            {% if presentation.type == "Full Paper" %}
                {% assign num_full_papers = num_full_papers | plus: 1 %}
            {% elsif presentation.type == "Provocation Paper" %}
                {% assign num_provocation_papers = num_provocation_papers | plus: 1 %}
            {% elsif presentation.type == "Panel" %}
                {% assign num_panels = num_panels | plus: 1 %}
            {% elsif presentation.type == "Demo" %}
                {% assign num_demos = num_demos | plus: 1 %}
            {% elsif presentation.type == "Poster" %}
                {% assign num_posters = num_posters | plus: 1 %}
            {% elsif presentation.type == "Featured Talk" %}
                {% assign num_featured_talks = num_featured_talks | plus: 1 %}
            {% elsif presentation.type == "Keynote" %}
                {% assign num_keynotes = num_keynotes | plus: 1 %}
            {% endif %}
        {% endfor %}
     {% endfor %}
{% endfor %}

Welcome to the {{ site.conference.short_name_ }} {{ site.conference.year }} web programme. There are {{ num_sessions }} sessions taking place over the {{ site.data.days | size }} days of the conference, including {{ num_full_papers }} Full Papers, {{ num_provocation_papers }} Provocation Papers, {{ num_panels }} panels, {% if num_demos > 0 %}{{ num_demos }} demos{% endif %}{% if num_posters > 0 %}{{ num_posters }} posters{% endif %}{% if num_featured_talks > 0 %}{{ num_featured_talks }} Featured Talks, {% endif %}and {{ num_keynotes }}{% if num_keynotes == 1 %} keynote{% else %} keynotes{% endif %}. We look forward to you joining us.

<div class="d-flex flex-lg-row flex-column bg-light border rounded">
{% assign is_first = true %}
{% for day in site.data.days %}
    <div class="flex-grow-1 mt-1 mb-2 mr-2 ml-lg-0 ml-2 {% if is_first %}ml-lg-2 mt-lg-1 mt-2{% endif %}" style="flex-basis: 0">
        <div class="d-flex flex-column">
        <h3 class="text-center mt-lg-1">{{ day.title }} {{ foreach.index0  }}</h3>
        <div class="list-group bg-white rounded">
        {% assign day_path = "/programme/" | append: day.id %}
        {% assign day_path = day_path | relative_url %}
        {% for session in site.data.sessions[day.id] %}
            {% unless session.type == "Break" %}
            <a href="{{ day_path }}#session-{{ session.id }}" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center flex-fill small">
                <div class="w-100">
                    <span class="badge badge-secondary mt-1 mr-2 ">{{ session.type }}</span><br>
                    <span>{{ session.title }}</span>
                </div>
                {% if session.type == "Session" %}
                    <span class="badge badge-primary badge-pill">{{ site.data.presentations[session.id] | size }}</span>
                {% endif %}
            </a>
            {% endunless %}
        {% endfor %}
        </div>
        <div class="flex-grow-1"></div>
        <a href="{{ day_path }}" class="align-self-end btn btn-outline-primary btn-lg btn-block mt-3">View schedule &rarr;</a>
        </div>
    </div>
    {% assign is_first = false %}
{% endfor %}

</div>

{% endif %}