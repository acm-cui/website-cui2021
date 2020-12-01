---
label: Contact
description: Contact details for !!conference.short_name!! !!conference.year!!.
---

# Contact us

{% for group in site.data.oc %}
	{% for role in group['roles'] %}
		{% if role['contact'] %}
<p>Please send an email to the <a href="{{ role.email }}" title="Retrieve the email address for {{ site.conference.short_name }} {{ site.conference.year }} {{ role.label }}">{{ site.conference.short_name }} {{ site.conference.year }} {{ role.label }}</a>, 
		{% assign use_and = role['people'] | size | plus: -1 %}
		{% for person in role['people'] %}{{ person.name }}{% if forloop.index == use_and %} and {% else %}{% unless forloop.last %}, {% endunless %}{% endif %}{% endfor %}.</p>
		{% break %}
		{% endif %}
	{% endfor %}
{% endfor %}
