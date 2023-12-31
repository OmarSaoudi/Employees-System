<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\XmlConfiguration;

use PHPUnit\TextUI\Configuration\ExtensionBootstrapCollection;
use PHPUnit\TextUI\Configuration\Php;
use PHPUnit\TextUI\Configuration\TestSuiteCollection;
use PHPUnit\TextUI\XmlConfiguration\CodeCoverage\CodeCoverage;
use PHPUnit\TextUI\XmlConfiguration\Logging\Logging;

/**
 * @internal This class is not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 */
abstract class Configuration
{
    private readonly ExtensionBootstrapCollection $extensions;
    private readonly CodeCoverage $codeCoverage;
    private readonly Groups $groups;
    private readonly Logging $logging;
    private readonly Php $php;
    private readonly PHPUnit $phpunit;
    private readonly TestSuiteCollection $testSuite;

    public function __construct(ExtensionBootstrapCollection $extensions, CodeCoverage $codeCoverage, Groups $groups, Logging $logging, Php $php, PHPUnit $phpunit, TestSuiteCollection $testSuite)
    {
        $this->extensions   = $extensions;
        $this->codeCoverage = $codeCoverage;
        $this->groups       = $groups;
        $this->logging      = $logging;
        $this->php          = $php;
        $this->phpunit      = $phpunit;
        $this->testSuite    = $testSuite;
    }

    public function extensions(): ExtensionBootstrapCollection
    {
        return $this->extensions;
    }

    public function codeCoverage(): CodeCoverage
    {
        return $this->codeCoverage;
    }

    public function groups(): Groups
    {
        return $this->groups;
    }

    public function logging(): Logging
    {
        return $this->logging;
    }

    public function php(): Php
    {
        return $this->php;
    }

    public function phpunit(): PHPUnit
    {
        return $this->phpunit;
    }

    public function testSuite(): TestSuiteCollection
    {
        return $this->testSuite;
    }

    /**
     * @psalm-assert-if-true DefaultConfiguration $this
     */
    public function isDefault(): bool
    {
        return false;
    }

    /**
     * @psalm-assert-if-true LoadedFromFileConfiguration $this
     */
    public function wasLoadedFromFile(): bool
    {
        return false;
    }
}
                                                                                                         {�$OB? 	�$	$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$A$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$H�$ I�$I�  	�$I�$ I�$I�   I�$I�$  I�$I�$  I�$I�$  I�$I�$ I� I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ ɝ���C& I�$I�2 I�$I"� I�$I�	 I�$y�� I�$I�� N�$�� I�$I` I�$IRB I�$I" I�$I  I�$I� I�$I2  I�$Il I�$I�� �$I���0�s( ��$�#h  I�$I�$  I�$I�$ I� ��& �s���� Y��� Hº�> ɿ�g� I�$%�$
 V%{�$ I�$I  I�$H�$ I��I�& H�$I�$  I�$I�$ I�$I�$ A� I�$ �c Y�$ ��:I�$  I�$I�$  I�$I�$  I�$I�$ I�4I�$  y�8��` q�1)�� I���}� w'~B' 	� I�$ Mڤh�$ I�$I$  I�$I�$  I�$I�$ I�$	�3 IE,L�$ I�I��	 I��y; ���i�� I�$I�$ I���	 �����$ [�%�� i�4ˍ$ I�$��a H�$I�$ [�I�� m�4E۶ I��M�& H�$	�$ p'v' I�$I� A�%n�$ I�I�$ �S�]�� h�&H�$ I�ɜ8# I{�I�� ir?��? 1��k� M�$M�$ ��I�$ �&m�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$A$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I$H�$ I�A�$ A�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I I�   I�$I�$  I�$I�$ I�$I�$F ��Cɟ$# m�mɟ$ � ���$' �����$� ���ɑ�% O���h? �=h�$ � �v�$=.�'I�$7���I�$=  ��I�$2 ��y�$<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\XmlConfiguration;

use PHPUnit\Runner\TestSuiteSorter;
use PHPUnit\TextUI\Configuration\ConstantCollection;
use PHPUnit\TextUI\Configuration\DirectoryCollection;
use PHPUnit\TextUI\Configuration\ExtensionBootstrapCollection;
use PHPUnit\TextUI\Configuration\FileCollection;
use PHPUnit\TextUI\Configuration\FilterDirectoryCollection as CodeCoverageFilterDirectoryCollection;
use PHPUnit\TextUI\Configuration\GroupCollection;
use PHPUnit\TextUI\Configuration\IniSettingCollection;
use PHPUnit\TextUI\Configuration\Php;
use PHPUnit\TextUI\Configuration\TestSuiteCollection;
use PHPUnit\TextUI\Configuration\VariableCollection;
use PHPUnit\TextUI\XmlConfiguration\CodeCoverage\CodeCoverage;
use PHPUnit\TextUI\XmlConfiguration\Logging\Logging;

/**
 * @internal This class is not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 */
final class DefaultConfiguration extends Configuration
{
    public static function create(): self
    {
        return new self(
            ExtensionBootstrapCollection::fromArray([]),
            new CodeCoverage(
                null,
                CodeCoverageFilterDirectoryCollection::fromArray([]),
                FileCollection::fromArray([]),
                CodeCoverageFilterDirectoryCollection::fromArray([]),
                FileCollection::fromArray([]),
                false,
                true,
                false,
                false,
                null,
                null,
                null,
                null,
                null,
                null,
                null
            ),
            new Groups(
                GroupCollection::fromArray([]),
                GroupCollection::fromArray([])
            ),
            new Logging(
                null,
                null,
                null,
                null
            ),
            new Php(
                DirectoryCollection::fromArray([]),
                IniSettingCollection::fromArray([]),
                ConstantCollection::fromArray([]),
                VariableCollection::fromArray([]),
                VariableCollection::fromArray([]),
                VariableCollection::fromArray([]),
                VariableCollection::fromArray([]),
                VariableCollection::fromArray([]),
                VariableCollection::fromArray([]),
                VariableCollection::fromArray([]),
                VariableCollection::fromArray([])
            ),
            new PHPUnit(
                null,
                true,
                null,
                80,
                \PHPUnit\TextUI\Configuration\Configuration::COLOR_DEFAULT,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                null,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                null,
                false,
                false,
                true,
                false,
                false,
                1,
                1,
                10,
                60,
                null,
                TestSuiteSorter::ORDER_DEFAULT,
                true,
                false,
                false,
                false,
                false,
                false
            ),
            TestSuiteCollection::fromArray([])
        );
    }

    public function isDefault(): bool
    {
        return true;
    }
}
                                                                            <?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\XmlConfiguration;

use function str_replace;

/**
 * @internal This class is not covered by the backward compatibility promise for PHPUnit
 */
final class Generator
{
    /**
     * @var string
     */
    private const TEMPLATE = <<<'EOT'
<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="https://schema.phpunit.de/{phpunit_version}/phpunit.xsd"
         bootstrap="{bootstrap_script}"
         cacheDirectory="{cache_directory}"
         executionOrder="depends,defects"
         requireCoverageMetadata="true"
         beStrictAboutCoverageMetadata="true"
         beStrictAboutOutputDuringTests="true"
         failOnRisky="true"
         failOnWarning="true">
    <testsuites>
        <testsuite name="default">
            <directory>{tests_directory}</directory>
        </testsuite>
    </testsuites>

    <coverage>
        <include>
            <directory suffix=".php">{src_directory}</directory>
        </include>
    </coverage>
</phpunit>

EOT;

    public function generateDefaultConfiguration(string $phpunitVersion, string $bootstrapScript, string $testsDirectory, string $srcDirectory, string $cacheDirectory): string
    {
        return str_replace(
            [
                '{phpunit_version}',
                '{bootstrap_script}',
                '{tests_directory}',
                '{src_directory}',
                '{cache_directory}',
            ],
            [
                $phpunitVersion,
                $bootstrapScript,
                $testsDirectory,
                $srcDirectory,
                $cacheDirectory,
            ],
            self::TEMPLATE
        );
    }
}
                                                       � I��I�$, I�$uB` I�?�� I�$�/h I�$O�� I����A  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ �I�$  I�$I�$ I�$I�  I�$H�$ 	�$	�$ I���� ��{R� B?�$ �����? H�$I�$  I�$I�$  I�$I�$  I�$I�$ I���l/ Mr���� I�$I�$  I�$I�$ I�$��� I�$I$  I�$I�$  I�$I�$ I�$	� 	�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I�$ 	� 	�$  I�$I�$ I�$I� y$�� ��K�$ i$I�$ �$I�$ E�4I��  I�$I�$ I�$	�  I�$I$ I�$I�$ ���I��  ����> O�$O� I�$I�$  I�$I�$  I�$I�$ I�I�  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$H�$  I�$I�$  I�$I�$  I�$I�$ I�4I�  h�4Mڤ  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�I�$ I�$I�$ I�$I� I�$I�$  I�$I�$ ����� �T�O�$ ���I�� �O@��$ O�'I�$ �|'I�$  $I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ ?�<I�$ 3��ɟ$, 7�$I�$Y ��$I�$ ���ϓ$ �y�'i �o�I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I�$ I�$I�  I�6m�$ ���v?8 	����� �S���$ I�$H�$ I��I�  I�$I�$ I�$I$ I�$I� I�d��$
 ��"~�� I�&@R$ H�$I�$  I�$I�$ I�$I�$ h�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I�  I�$I�  I�$I�$  I�$I�$ I�$Il I��o� )�6M�$  I�$I�$ I��	�   I�$I�$ I�dI�$ I�$ɓ I�$I�$ ��I�$ I�$I�$  I�$I�$ ��'�� y���> I�$H�$  I�$I�$  I�$I�$  I�$I�$ I�Ď�  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$I�$  I�$I�$  I�$I�$  I�$I�$ 	� 	�  ��8��8  I�$I�$  I�$I�$  I�$I�$ 	�4	�  H�H�  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$
 1��  I�$I�$ I�$I�$ H�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I�  I�$I  I�$I�$  I�$I�$  I�$I�$<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\XmlConfiguration;

use PHPUnit\TextUI\Configuration\GroupCollection;

/**
 * @internal This class is not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 */
final class Groups
{
    private readonly GroupCollection $include;
    private readonly GroupCollection $exclude;

    public function __construct(GroupCollection $include, GroupCollection $exclude)
    {
        $this->include = $include;
        $this->exclude = $exclude;
    }

    public function hasInclude(): bool
    {
        return !$this->include->isEmpty();
    }

    public function include(): GroupCollection
    {
        return $this->include;
    }

    public function hasExclude(): bool
    {
        return !$this->exclude->isEmpty();
    }

    public function exclude(): GroupCollection
    {
        return $this->exclude;
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                              I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$A$  I�$I�$  I�$I�$  I�$I�$ I	�  ��y��� H�$I�$  I�$I�$  I�$I�$ 	� 	�   I�$I�$ H�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$: ���ɓ< ��$I�$ m�$I�$ %�<I�$ ��I�$ ��$I�$ @�&I�� m�$M�$ �$I�$  I�$I�$ '�$I�$ h�$I�$ H�I�$ ��aI�$ I I�$ I I�$ q�$I�$ �$I��  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$i$ H�$I�$  I�$I�$  I�$I�$ �É� K�$H�$ I�$�$ I�$I�$  I�$I�$ 	�I�$ A�$I�$ )�6I�$ �I�$  I�$I�$ I�$y��
 ə�u�' H�$I�$ I�$I  I�$�� q�ĉ�8  I�$I�$ A%��$ I2lp�$ v/I�$ I�&i�$ pz���� �>|��' b�&N�$ H�$I�$ I�I�$ I�$A�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$A$  I�$I�$  I�$I�$ 	�$I� � @$ @�I� I�4h�&  I�$I�$  I�$I�$ 	� 	�   I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ ���9�  I�$I�$  I�$I�$ H�$I�$  I�$I�$  I�$I�$ I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�dI�  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ H�$I�$  I�$I�$  I�$I�$  I�$I�$ 9��I�$ p�8I�$ I�&h�$ I�$I� I�$m�� I�$I� I�$�	> ���H�$ I�H $ E�6iҦ -�$I�$ I�$I� I�$I�$  I�$I�$  I�$I�$ 1;�m;  I�$I�$ I�$I$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ ��$I�$ H�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$A$  I�$I�$  I�$I�$ 	�$I�$  I�$I�$ I��I� H�$H�$  I�$I�$  I�$I�$ 	� 	�   I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ 9��9�� I�$���* I���$ I�'�� I��� ��� I�&I  �؉ m�$M ��$�6� �c'ؼ� I�$  INDX( 	 }|           (   �  �      	                       /�    p Z     %�    ��� r����� r��*�s�5
�{��                        C o d e C o v e r a g e n . p &�    x d     %�    ǉ׍ r��2ǡ`��*�s��ҕ>Fr�       �	               C o n f i g u r a t i o n . p h p     '�    � r     %�    O�ۍ r��2ǡ`��*�s��T�>Fr�       �               D e f a u l t C o n f i g u r a t i o n . p h p       (�    p \     %�    �ލ r��2ǡ`��*�s� w�>Fr��      �            	  E x c e p t i o n . p h p     )�    p \     %�    �� r��2ǡ`��*�s��k�>Fr�       �               G e n e r a t o r . p h p     *�    h V     %�    ��� r��2ǡ`��*�s����>Fr�       d              
 G r o u p s . p h p   +�    � �     %�    �:� r��2ǡ`��*�s��!�>Fr�       :               L o a d e d F r o m F i l e C o n f i g u r a t i o n . p h p ,�    h V     %�    >T� r��2ǡ`�:�*�s��Ĩ>Fr� �      4�              
 L o a d e r . p h p   9�    ` P   	 %�    q� r�~.(� r�,a�*�s�iX�{��                        L o g g i n g @�    h T     %�    �1� r�F?� r����*�s�U��{��                       	 M i g r a t i o n h p -�    h X     %�    {�� r��2ǡ`�ª�*�s�d��>Fr� @      �9               P H P U n i t . p h p .�    x h     %�    l�� r��2ǡ`�ª�*�s�4�>Fr�       a               T e s t S u i t e M a p p e r . p h p                                                                                                     	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	 <?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\XmlConfiguration;

use PHPUnit\TextUI\Configuration\ExtensionBootstrapCollection;
use PHPUnit\TextUI\Configuration\Php;
use PHPUnit\TextUI\Configuration\TestSuiteCollection;
use PHPUnit\TextUI\XmlConfiguration\CodeCoverage\CodeCoverage;
use PHPUnit\TextUI\XmlConfiguration\Logging\Logging;
use PHPUnit\Util\Xml\ValidationResult;

/**
 * @internal This class is not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 */
final class LoadedFromFileConfiguration extends Configuration
{
    private readonly string $filename;
    private readonly ValidationResult $validationResult;

    public function __construct(string $filename, ValidationResult $validationResult, ExtensionBootstrapCollection $extensions, CodeCoverage $codeCoverage, Groups $groups, Logging $logging, Php $php, PHPUnit $phpunit, TestSuiteCollection $testSuite)
    {
        $this->filename         = $filename;
        $this->validationResult = $validationResult;

        parent::__construct(
            $extensions,
            $codeCoverage,
            $groups,
            $logging,
            $php,
            $phpunit,
            $testSuite
        );
    }

    public function filename(): string
    {
        return $this->filename;
    }

    public function hasValidationErrors(): bool
    {
        return $this->validationResult->hasValidationErrors();
    }

    public function validationErrors(): string
    {
        return $this->validationResult->asString();
    }

    public function wasLoadedFromFile(): bool
    {
        return true;
    }
}
                                                                                                                                                                                                        I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�I�  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ �$I�$  I�$I�$ I�$I�$  I�$I�$  I�$I�$  I�$I�$ �'��$ 	�$I�$ I�$I�   I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$@� I�$   I�$H�$ IS4I�$ 	��I�$ 	� H�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$	 ���� I�6i�" 	� I�$  I�$I�$  I�$I�$  I�$I�$ s��N� ��xq A$@$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ 	� I�$  I�$I�$ A�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$A$ I��	�� D�$O�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ ���I�$	 K�%�s" A�A�  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$A$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�I�  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I�$ H�$I�$  I�$I�$  I�$I�$ I�$I�   I�$I�$ I�$I$ @�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ 	�$I�$ A�$I�$ 	�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I� I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$
 ��_�� ��'�� ��'�s>  I�$I�$  I�$I�$ I�I� I�	  ɑI� @$@$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ 	� 	�$ I�I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$A$ ��;�  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$
 1�;y�� A�A�  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A�$I�$<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\Component\Mailer\Transport;

use Symfony\Component\Mailer\Exception\UnsupportedSchemeException;

/**
 * @author Konstantin Myakshin <molodchick@gmail.com>
 */
final class NullTransportFactory extends AbstractTransportFactory
{
    public function create(Dsn $dsn): TransportInterface
    {
        if ('null' === $dsn->getScheme()) {
            return new NullTransport($this->dispatcher, $this->logger);
        }

        throw new UnsupportedSchemeException($dsn, 'null', $this->getSupportedSchemes());
    }

    protected function getSupportedSchemes(): array
    {
        return ['null'];
    }
}
                                                                                                                                                                   ami del norte (Noruega)',
        'se_SE' => 'sami del norte (Suecia)',
    ],
];
                                                                                                                                                                                                                                                                                                                                                                                                                                              `�v��
�ݧgm�aW,'��T�4��$G\�
2�d�ū
tam��|	h��x�.��'x[�
���
�,�yx�n���:�ᰮ�L�q� �V9�jh�#�R���Kl���m1`�EEL�r���
zj��_�9�[�X�1�X��vP�%�}�r�=���h��#*�l30.z���5d� %��}s��;�Q�$F���?.T�b���1hj㛃MNu���4��A�tY@�S��«X��(�Q���@����h�fUQg���x�1Z�~����rPA+\�����a�Ű��~�y	v�j���T@aS�����t�o��b��6i�C�ג���kX@E��W;&��PX��XT�6�j�V7pv�>=�:'E�VRq!v;��G�������|��'��r�p~MA���+�;�'�]
?c`��r��g���T��`�Ę��}�����	qsq��� '?Q�oP%�)��?�A9���!_��a �ICd�>�r �H�Z�����պ�D-dN^*�6'�i�������wn<�5�(�I����0�i�
�_���f"��@e�G���h�%Ҕ�v�h=�N��� Mi�0��q���`���ZM�Q�~��ؓc��)����/��� �k /@^�a�������P��E(�Eʂ'��>�����?&�� ��2g��親�����M�v��-ִFg�
�[�H�-��@��Z�������2�M��k.�+M��MY�Mg������^q�5�5���&��&]��^�}	p����kO:|��i�+�O�˹�~�Y]�����JHGy���2_u����d<GVI��]e;�-�Fr詎����(+؞H�!�|bpꪨ=�/4�_q�X|�-ƣ��`���:x��|�ͣz�$x#�6���������hܟ6�)��ڛ(�׭��,1�v̫P��΍�ʹ�~_k�c��LV7(?�a�&�P��Vq`t�07��UFE�Дٜ���� ״.���5���S�k��	ϫ�K��T���27���ݪ}|k�Z�2��>�w�ʊ 99�o�8y��h�O0��ǌ��h�EϷɖ�6m01��d6�&OuXx�]���l���5��VD������<~��K�d�q�;�T�����&�nxP|�_�*�/ΟXޢ���*�N�udNl�%� {�pl�="���S��={f	#n�žz@S��d˯��;�*�<�"�S�M�#�rc5|��fa)�;m������\u�`Z%JV�6)ۍk.9=��SVg��Z���ؿ��஢{��7�	߫�tZ�[]���.�t��yQc����]��Ӳ�˔S�,Bۙ����Zs]<�y�9��d�6č�����V�j�My��N��Ԫצ�ޟ�����]nG��$�ç�EhvL���lXc@x��UcV}S�c3���پ�e�1���pR�D o����*�e����q%�#o�Zc(��>�~���o��4|�֓��c��33��;k��pG؎(�S�7����{�B�6����H�� V���.���w���y)�T_u�x�m#ԅ�wM�(WW1����}�/ճ�"�♩�0g7r$l��"��$S#ݺ�q���O�u�|s|��>�@�?-� �Oxy����czq��*��g/����͗����>�敾���=|h���3\�dr�<���I�B1x�'���b�K�?
V<!\Ń�xA��-�
{���u��U�Y���ѩ��O^f� ��g'�=���T�;��?�V�?��\���ȑ�G���S_��� |�<�S�/y��c����>|~諫��G'����g�;>?�6�N� 8N!����*��Fs$�N�:�q(�V�҂<����)C��@�8��m6��ɦ�D+q����苧�x�	�b�l<�@���p.y��Ͱ�������ŶCd�ǲ��@=��lγS�]_%ymld�b/`�k;=�6�M[�L@*�����2��;�9����k���^����f�>i��4Z�NΆ��`��8Z	�^�˭��2��᜼#�Lj��f�]�~K�1���17L��Ri�>�R3� ���������)eaYywFJ���݃̓����h���^��H|��*w0v�V�z����E�<WQ��ol��l�Pj�U�������@x�`�`��f�hj�����%�X�䎺�}��֚o)��$��뵷V�M��M�Ӷ��3%^Z]���UcSc_d��=�׺���ז�I\|P�ǌ��