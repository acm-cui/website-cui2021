---
label: Organising Committee
description: The Organising Committee for the 2021 Conversational User Interfaces conference.
---

# Organising Committee

The following people have volunteered their time to assist in the organisation of {{ site.conference.short_name }} {{ site.conference.year }}.

{% for group in site.data.oc %}
<h2>{{ group.label }}</h2>

{% assign num_roles_chairs = group['roles'] | size %}
{% assign half_num_roles_chairs = num_roles_chairs | divided_by: 2 %}
{% assign half_num_roles_chairs = half_num_roles_chairs | plus: 1 %}

<div class="row">
	<div class="col-md-6 col-12">
        {% for role in group['roles'] offset:0 limit:half_num_roles_chairs %}
		<h3>{{ role.label }} <a href="{{ role.email }}" title="Retrieve the email address for {{ site.conference.year }} {{ role.label }}"><img src="{{ "assets/img/envelope.svg" | relative_url }}" alt="An envelope icon" class="icon-email ml-1"></a></h3>
		<ul class="list-unstyled">
			{% for people in role['people'] %}
            <li class="pb-1">{{ people.name }}<br><em class="text-muted small">{{ people.institution }}, {{ people.country }}</em></li>
			{% endfor %}
		</ul>
        {% endfor %}
	</div>
	<div class="col-md-6 col-12">
        {% for role in group['roles'] offset:half_num_roles_chairs %}
		<h3>{{ role.label }} <a href="{{ role.email }}" title="Retrieve the email address for {{ site.conference.year }} {{ role.label }}"><img src="{{ "assets/img/envelope.svg" | relative_url }}" alt="An envelope icon" class="icon-email ml-1"></a></h3>
		<ul class="list-unstyled">
			{% for people in role['people'] %}
            <li class="pb-1">{{ people.name }}<br><em class="text-muted small">{{ people.institution }}, {{ people.country }}</em></li>
			{% endfor %}
		</ul>
        {% endfor %}
	</div>
</div>

{% unless forloop.last %}
<hr>
{% endunless %}

{% endfor %}