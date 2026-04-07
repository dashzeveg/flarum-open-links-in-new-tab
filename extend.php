<?php

namespace Dashzeveg\Openlinksinnewtab;

use Flarum\Extend;
use Laminas\Diactoros\Uri;

return [
    (new Extend\Link)
        ->setTarget(function (Uri $uri, Uri $siteUrl, array $attributes): string {
            return $uri->getHost() === $siteUrl->getHost() ? '_self' : '_blank';
        })
        ->setRel(function (Uri $uri, Uri $siteUrl, array $attributes): string {
            return $uri->getHost() === $siteUrl->getHost() ? 'ugc' : 'noopener ugc nofollow';
        }),
];