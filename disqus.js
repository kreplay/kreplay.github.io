				var disqus_blogger_current_url = &quot;<data:blog.canonicalUrl/>&quot;;
						if (!disqus_blogger_current_url.length) {
							disqus_blogger_current_url = &quot;<data:blog.url/>&quot;;
						}
						var disqus_blogger_homepage_url = &quot;<data:blog.homepageUrl/>&quot;;
						var disqus_blogger_canonical_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;
						//<![CDATA[
						var disqus_shortname = 'kpopreplay';// disqus custom shortname for moderation
						var disqus_url = disqus_blogger_current_url;

						(function () {
							"use strict";
							var get_comment_block = function () {
								var block = document.getElementById('disqus-comments-holder');
								
								return block;
							};
							var comment_block = get_comment_block();
							if (!!comment_block) {
								var disqus_div = document.createElement('div');
								disqus_div.id = 'disqus_thread';
								comment_block.innerHTML = '';
								comment_block.appendChild(disqus_div);
								comment_block.style.display = 'block';
								var dsq = document.createElement('script');
								dsq.async = true;
								dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
								(document.getElementsByTagName('head')[0] || document.body).appendChild(dsq);
							}
						})();
						//]]>
